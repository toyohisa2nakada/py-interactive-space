import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { EditorView, Decoration, type DecorationSet, hoverTooltip } from '@codemirror/view';
import { EditorState, StateField } from '@codemirror/state';
import type { Problem } from './problems';
// ↓ この1行を変えると完了演出が切り替わります
import { CompletionScreen } from './CompletionScreenC';
import { problemSet00 } from './problems/index00';
import { problemSet01 } from './problems/index01';
import { problemSet02 } from './problems/index02';
import { problemSet03 } from './problems/index03';
import { problemSet04 } from './problems/index04';
import { problemSet05 } from './problems/index05';
import { problemSet06 } from './problems/index06';
import type { PyodideInterface } from 'pyodide';

// ─── 問題セット定義 ────────────────────────────────────────────
const ALL_SETS = [
  problemSet00,
  problemSet01, problemSet02, problemSet03,
  problemSet04, problemSet05, problemSet06,
];
const SET_LABELS       = ['セット0','セット1','セット2','セット3','セット4','セット5','セット6'];
const SET_DESCRIPTIONS = [
  'テストセット',
  '超入門：変数・演算',
  '入門：if・forループ',
  '初中級：ループ・リスト',
  '中級：文字列・関数',
  '中上級：関数・多テスト',
  '上級：全文作成・応用',
];

function getInitialSetIndex(): number {
  const s = new URLSearchParams(window.location.search).get('set');
  if (s) { const n = parseInt(s, 10); if (n >= 1 && n <= ALL_SETS.length) return n - 1; }
  return 0;
}

// ─── LocalStorage ─────────────────────────────────────────────
interface ProblemRecord {
  correctCount:   number;   // 正解した回数
  incorrectCount: number;   // 不正解の回数
  lastAnswer:     string;   // fill-in: 穴の内容 / predict-output: 入力テキスト
  lastOutput:     string;   // fill-in: 最後の実行出力
}

const TODAY          = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
const STORAGE_PREFIX = 'pyp';

function storageKey(problemId: number): string {
  return `${STORAGE_PREFIX}_${TODAY}_p${problemId}`;
}
function emptyRecord(): ProblemRecord {
  return { correctCount: 0, incorrectCount: 0, lastAnswer: '', lastOutput: '' };
}
function loadRecord(problemId: number): ProblemRecord {
  try {
    const raw = localStorage.getItem(storageKey(problemId));
    if (!raw) return emptyRecord();
    return { ...emptyRecord(), ...JSON.parse(raw) };
  } catch { return emptyRecord(); }
}
function saveRecord(problemId: number, rec: ProblemRecord): void {
  try { localStorage.setItem(storageKey(problemId), JSON.stringify(rec)); } catch { /* quota */ }
}

/** setIndex に対して「今日正解済み」の問題インデックスセットを構築する */
function initAnsweredSet(setIdx: number): Set<string> {
  const s = new Set<string>();
  ALL_SETS[setIdx].forEach((p, idx) => {
    if (loadRecord(p.id).correctCount > 0) s.add(`${setIdx}-${idx}`);
  });
  return s;
}

// ─── Pyodide ─────────────────────────────────────────────────
let pyodideInstance: PyodideInterface | null = null;
async function getPyodide(): Promise<PyodideInterface> {
  if (pyodideInstance) return pyodideInstance;
  // @ts-ignore
  pyodideInstance = await window.loadPyodide({
    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/',
  }) as PyodideInterface;
  return pyodideInstance;
}

// ─── 穴の内容を取り出す ────────────────────────────────────────
/**
 * codeWithMarker のテンプレート構造（prefix + §§§ + suffix）を利用して
 * 現在のエディタ doc から穴の中身だけを返す。
 * doc = prefix + [student text] + suffix なので
 * student text = doc.slice(holeFrom, doc.length - suffix.length)
 */
function getHoleContent(view: EditorView, problem: Problem): string {
  const raw = problem.codeWithMarker ?? '';
  const m = raw.match(/§+/);
  if (!m) return '';
  const holeFrom = raw.indexOf(m[0]);
  const suffix   = raw.slice(holeFrom + m[0].length);
  const doc      = view.state.doc.toString();
  return doc.slice(holeFrom, doc.length - suffix.length);
}

/** 必須トークンのうち answer に含まれないものを返す */
function missingTokens(answer: string, required: string[] | undefined): string[] {
  if (!required || required.length === 0) return [];
  return required.filter(t => !answer.includes(t));
}

// ─── Python ホバー辞書 ────────────────────────────────────────
import { PY_DICT } from './pyDict';

function buildPyTooltip(view: EditorView, pos: number) {
  const line    = view.state.doc.lineAt(pos);
  const text    = line.text;
  const linePos = pos - line.from;

  // ① アルファベット・数字・アンダースコアからなる単語を探す
  let start = linePos;
  let end   = linePos;
  while (start > 0 && /[a-zA-Z0-9_]/.test(text[start - 1])) start--;
  while (end < text.length && /[a-zA-Z0-9_]/.test(text[end])) end++;

  // ② 単語が見つからなければ演算子を探す（2文字を優先）
  if (start === end) {
    const c    = text[linePos]    ?? '';
    const prev = text[linePos - 1] ?? '';
    const next = text[linePos + 1] ?? '';
    const op2r = c + next;       // カーソルが1文字目
    const op2l = prev + c;       // カーソルが2文字目
    if      (PY_DICT[op2r]) { start = linePos;     end = linePos + 2; }
    else if (PY_DICT[op2l]) { start = linePos - 1; end = linePos + 1; }
    else if (PY_DICT[c])    { start = linePos;     end = linePos + 1; }
  }

  if (start === end) return null;

  const word = text.slice(start, end);
  const desc = PY_DICT[word];
  if (!desc) return null;

  // HTML エスケープ（< > などが壊れないように）
  const safeWord = word.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return {
    pos: line.from + start,
    end: line.from + end,
    above: true,
    create() {
      const dom = document.createElement('div');
      dom.className = 'py-tooltip';
      dom.innerHTML = `<span class="py-tooltip-kw">${safeWord}</span>${desc}`;
      return { dom };
    },
  };
}

// ─── CodeMirror エディタ構築 ───────────────────────────────────
function buildEditorState(problem: Problem, savedAnswer?: string, hintsEnabled = false): EditorState {
  const baseExtensions = [
    EditorView.theme({
      '&':              { fontSize: '15px' },
      '.cm-content':    { fontFamily: '"Fira Code","Cascadia Code",monospace', padding: '12px 0' },
      '.cm-line':       { padding: '0 14px' },
      '.readonly-bg':   { backgroundColor: '#f1f5f9', color: '#64748b' },
      '.editable-hole': { backgroundColor: '#fefce8', color: '#1e293b', borderBottom: '2px solid #fbbf24' },
    }),
    ...(hintsEnabled ? [hoverTooltip(buildPyTooltip, { hideOnChange: true })] : []),
  ];

  // predict-output: 読み取り専用
  if (problem.type === 'predict-output') {
    return EditorState.create({
      doc: problem.code ?? '',
      extensions: [
        ...baseExtensions,
        EditorState.readOnly.of(true),
        EditorView.theme({ '.cm-content': { backgroundColor: '#f8fafc' } }),
      ],
    });
  }

  // fill-in: 穴あきエディタ
  const raw         = problem.codeWithMarker ?? '';
  const markerMatch = raw.match(/§+/);
  const marker      = markerMatch ? markerMatch[0] : '§';
  const holeFrom    = raw.indexOf(marker);
  const suffix      = raw.slice(holeFrom + marker.length);

  // savedAnswer があればそれを穴の初期値に
  const holeContent = (savedAnswer != null && savedAnswer.length > 0)
    ? savedAnswer
    : ' '.repeat(marker.length);
  const doc    = raw.slice(0, holeFrom) + holeContent + suffix;
  const holeTo = holeFrom + holeContent.length;

  const rangeField = StateField.define<{ from: number; to: number }>({
    create: () => ({ from: holeFrom, to: holeTo }),
    update(value, tr) {
      let { from, to } = value;
      tr.changes.iterChanges((fromA, toA, fromB, toB) => {
        if (fromA >= from && toA <= to) {
          to += (toB - fromB) - (toA - fromA);
        } else if (toA <= from) {
          const delta = (toB - fromB) - (toA - fromA);
          from += delta; to += delta;
        }
      });
      return { from, to };
    },
  });

  const lockFilter = EditorState.transactionFilter.of((tr) => {
    if (!tr.docChanged) return tr;
    const cur = tr.startState.field(rangeField);
    let allowed = true;
    tr.changes.iterChanges((fromA, toA, _fromB, toB) => {
      if (fromA < cur.from || toA > cur.to) allowed = false;
      if (cur.to - cur.from === 1 && fromA === cur.from && toA === cur.to && _fromB === toB) allowed = false;
    });
    return allowed ? tr : [];
  });

  const highlightExtension = StateField.define<DecorationSet>({
    create(state) {
      const r = state.field(rangeField);
      const len = state.doc.length;
      if (r.from < 0 || r.to > len || r.from >= r.to) return Decoration.set([], true);
      return Decoration.set([
        Decoration.mark({ class: 'readonly-bg' }).range(0, r.from),
        Decoration.mark({ class: 'editable-hole' }).range(r.from, r.to),
        Decoration.mark({ class: 'readonly-bg' }).range(r.to, len),
      ], true);
    },
    update(_dec, tr) {
      const r = tr.state.field(rangeField);
      const len = tr.state.doc.length;
      if (r.from >= r.to || r.from < 0 || r.to > len) return Decoration.set([], true);
      return Decoration.set([
        Decoration.mark({ class: 'readonly-bg' }).range(0, r.from),
        Decoration.mark({ class: 'editable-hole' }).range(r.from, r.to),
        Decoration.mark({ class: 'readonly-bg' }).range(r.to, len),
      ], true);
    },
    provide: f => EditorView.decorations.from(f),
  });

  return EditorState.create({
    doc,
    extensions: [...baseExtensions, rangeField, lockFilter, highlightExtension],
  });
}

// ─── App ──────────────────────────────────────────────────────
export default function App() {
  const urlSetLocked = useMemo(() => new URLSearchParams(window.location.search).has('set'), []);

  const [setIndex,      setSetIndex]      = useState(getInitialSetIndex);
  const [currentIndex,  setCurrentIndex]  = useState(0);
  const [isCorrect,     setIsCorrect]     = useState<boolean | null>(null);
  const [predictInput,  setPredictInput]  = useState('');
  const [output,        setOutput]        = useState<string | null>(null);
  const [pyStatus,      setPyStatus]      = useState<'idle'|'loading'|'ready'|'running'>('idle');

  // ゲーミフィケーション — localStorage から初期値を構築
  const [answeredSet,   setAnsweredSet]   = useState<Set<string>>(
    () => initAnsweredSet(getInitialSetIndex())
  );
  const [correctCount,  setCorrectCount]  = useState<number>(
    () => initAnsweredSet(getInitialSetIndex()).size
  );
  const [scoreBump,     setScoreBump]     = useState(false);
  const [plusOneKey,    setPlusOneKey]    = useState(0);
  const [showPlusOne,   setShowPlusOne]   = useState(false);
  const [settingsOpen,   setSettingsOpen]  = useState(false);
  const [hintsEnabled,   setHintsEnabled]  = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewRef      = useRef<EditorView | null>(null);

  const currentSet = ALL_SETS[setIndex];
  const problem    = currentSet[currentIndex];
  const answerKey  = `${setIndex}-${currentIndex}`;

  // ─── 現在の問題の状態を localStorage に保存 ──────────────────
  const saveCurrentState = useCallback(() => {
    if (!viewRef.current) return;
    const rec = loadRecord(problem.id);
    if (problem.type === 'fill-in') {
      rec.lastAnswer = getHoleContent(viewRef.current, problem);
      if (output !== null) rec.lastOutput = output;
    } else {
      rec.lastAnswer = predictInput;
    }
    saveRecord(problem.id, rec);
  }, [problem, output, predictInput]);

  // ─── 問題移動（保存してから移動）───────────────────────────
  const navigateTo = useCallback((newIdx: number) => {
    saveCurrentState();
    setCurrentIndex(newIdx);
  }, [saveCurrentState]);

  // ─── セット切り替え（保存してから切り替え）─────────────────
  const switchSet = useCallback((idx: number) => {
    saveCurrentState();
    setSetIndex(idx);
    setCurrentIndex(0);
    setIsCorrect(null);
    setOutput(null);
    setPredictInput('');
  }, [saveCurrentState]);

  // ─── もう一度挑戦 ────────────────────────────────────────────
  const handleRetry = useCallback(() => {
    setShowCompletion(false);
    setCurrentIndex(0);
    setIsCorrect(null);
    setOutput(null);
    setPredictInput('');
    // スコアもリセット
    const empty = new Set<string>();
    setAnsweredSet(empty);
    setCorrectCount(0);
  }, []);

  // ─── セット変更時: answeredSet / correctCount を再構築 ──────
  useEffect(() => {
    const s = initAnsweredSet(setIndex);
    setAnsweredSet(s);
    setCorrectCount(s.size);
  }, [setIndex]);

  // ─── エディタ再構築 + localStorage から状態を復元 ────────────
  useEffect(() => {
    if (!containerRef.current) return;
    viewRef.current?.destroy();

    const rec         = loadRecord(problem.id);
    const savedAnswer = rec.lastAnswer.length > 0 ? rec.lastAnswer : undefined;
    const state       = buildEditorState(problem, savedAnswer, hintsEnabled);
    const view        = new EditorView({ state, parent: containerRef.current });
    viewRef.current   = view;

    setIsCorrect(null);
    setOutput(null);
    // predict-output は前回の入力を復元
    setPredictInput(problem.type === 'predict-output' ? rec.lastAnswer : '');

    return () => { view.destroy(); viewRef.current = null; };
  }, [setIndex, currentIndex, hintsEnabled]);

  // ─── Pyodide 事前ロード ───────────────────────────────────
  useEffect(() => {
    setPyStatus('loading');
    getPyodide().then(() => setPyStatus('ready'));
  }, []);

  // ─── タブを閉じる / リロード前に保存 ──────────────────────
  useEffect(() => {
    window.addEventListener('beforeunload', saveCurrentState);
    return () => window.removeEventListener('beforeunload', saveCurrentState);
  }, [saveCurrentState]);

  // ─── 正解演出 ────────────────────────────────────────────
  const triggerScore = useCallback(() => {
    if (answeredSet.has(answerKey)) return; // すでに正解済み → 加算しない
    setAnsweredSet(prev => new Set(prev).add(answerKey));
    setCorrectCount(c => c + 1);
    setShowPlusOne(false);
    setTimeout(() => { setPlusOneKey(k => k + 1); setShowPlusOne(true); }, 10);
    setScoreBump(false);
    setTimeout(() => setScoreBump(true),  10);
    setTimeout(() => setScoreBump(false), 610);
  }, [answeredSet, answerKey]);

  // ─── 答え合わせ ───────────────────────────────────────────
  const checkAnswer = useCallback(async () => {
    if (!viewRef.current) return;

    if (problem.type === 'predict-output') {
      const correct = predictInput.trim() === problem.correctOutput.trim();
      setIsCorrect(correct);
      const rec = loadRecord(problem.id);
      if (correct) rec.correctCount++; else rec.incorrectCount++;
      rec.lastAnswer = predictInput;
      saveRecord(problem.id, rec);
      if (correct) triggerScore();
      return;
    }

    if (pyStatus !== 'ready') return;
    setPyStatus('running');
    try {
      const code = viewRef.current.state.doc.toString();
      const py   = await getPyodide();
      py.globals.set('_output_lines', py.toPy([]));
      await py.runPythonAsync(`import sys, io\n_buf = io.StringIO()\nsys.stdout = _buf`);
      await py.runPythonAsync(code);
      const captured = await py.runPythonAsync(
        `sys.stdout = sys.__stdout__\n_buf.getvalue().strip()`
      ) as string;
      setOutput(captured);
      let correct = captured === problem.correctOutput.trim();
      // 出力が合っていても必須トークンが不足していれば不正解
      if (correct) {
        const answer  = getHoleContent(viewRef.current, problem);
        const missing = missingTokens(answer, problem.requiredTokens);
        if (missing.length > 0) {
          correct = false;
          setOutput(`出力は合っています！ ヒント: ${missing.map(t => `「${t}」`).join('、')} を使って書いてみましょう`);
        }
      }
      setIsCorrect(correct);
      const rec = loadRecord(problem.id);
      if (correct) rec.correctCount++; else rec.incorrectCount++;
      rec.lastAnswer = getHoleContent(viewRef.current, problem);
      rec.lastOutput = captured;
      saveRecord(problem.id, rec);
      if (correct) triggerScore();
    } catch (e) {
      // Traceback を除いて最後のエラー行だけ表示
      const msg = (e as Error).message ?? String(e);
      const lastLine = msg.split('\n').filter(l => l.trim()).pop() ?? msg;
      setOutput(`エラー: ${lastLine}`);
      setIsCorrect(false);
    } finally {
      setPyStatus('ready');
    }
  }, [problem, predictInput, pyStatus, triggerScore]);

  // ─── UI ───────────────────────────────────────────────────
  return (
    <div className="h-screen flex flex-col bg-slate-50 overflow-hidden">

      {/* ══ ヘッダー ════════════════════════════════════════════ */}
      <header className="bg-white border-b border-slate-200 shadow-sm flex-shrink-0">

        {/* 上段：左＝タイトル、中央＝正解数、右＝歯車 */}
        <div className="grid grid-cols-3 items-center px-8 py-3">

          {/* 左：タイトル */}
          <div className="flex items-center gap-3 min-w-0">
            {urlSetLocked ? (
              <span className="text-lg font-extrabold text-blue-600 whitespace-nowrap">
                Python 練習問題
              </span>
            ) : (
              <>
                <span className="text-lg font-extrabold text-blue-600 whitespace-nowrap">
                  {SET_LABELS[setIndex]}
                </span>
                <span className="text-sm text-slate-500 hidden md:inline truncate">
                  {SET_DESCRIPTIONS[setIndex]}
                </span>
              </>
            )}
          </div>

          {/* 中央：正解数 */}
          <div className="relative flex items-center justify-center gap-2">
            {showPlusOne && (
              <span
                key={plusOneKey}
                className="anim-plusone absolute -top-1 left-1/2 -translate-x-1/2 text-green-500 font-extrabold text-xl pointer-events-none select-none"
              >
                +1
              </span>
            )}
            <span className="text-sm text-slate-500 font-medium">正解数</span>
            <span className={`text-3xl font-black tabular-nums text-amber-500 ${scoreBump ? 'anim-scorebump' : ''}`}>
              {correctCount}
            </span>
            <span className="text-slate-400 text-sm">/ {currentSet.length}</span>
          </div>

          {/* 右：歯車ボタン ＋ 設定ドロップダウン */}
          <div className="flex justify-end">
            <div className="relative">
              <button
                onClick={() => setSettingsOpen(o => !o)}
                className={`w-9 h-9 flex items-center justify-center rounded-lg text-lg transition-colors ${
                  settingsOpen
                    ? 'bg-slate-200 text-slate-700'
                    : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                }`}
                title="設定"
              >
                ⚙
              </button>

              {/* ドロップダウン */}
              {settingsOpen && (
                <>
                  {/* 背景クリックで閉じる */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setSettingsOpen(false)}
                  />
                  <div className="absolute right-0 mt-1 z-20 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 min-w-[200px]">
                    {/* ヒント切り替え */}
                    <button
                      onClick={() => setHintsEnabled(v => !v)}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      <span>キーワードヒント</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${hintsEnabled ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                        {hintsEnabled ? 'ON' : 'OFF'}
                      </span>
                    </button>
                    <div className="border-t border-slate-100 my-1" />
                    <button
                      onClick={() => {
                        setSettingsOpen(false);
                        if (!window.confirm('今日の進捗をすべてリセットしますか？')) return;
                        Object.keys(localStorage)
                          .filter(k => k.startsWith(`${STORAGE_PREFIX}_${TODAY}_`))
                          .forEach(k => localStorage.removeItem(k));
                        window.location.reload();
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      <span>↺</span>
                      <span>今日の進捗をリセット</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* 下段：問題番号トラッカー */}
        <div className="flex flex-wrap items-center gap-1.5 px-8 pb-3 pt-1">
          {currentSet.map((p, idx) => {
            const solved    = answeredSet.has(`${setIndex}-${idx}`);
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => navigateTo(idx)}
                title={p.title}
                className={[
                  'relative flex-shrink-0 w-8 h-8 rounded-lg text-xs font-bold transition-all duration-200',
                  solved    ? 'bg-green-500 text-white shadow-sm'
                  : isCurrent ? 'bg-blue-600 text-white shadow-sm'
                              : 'bg-slate-100 text-slate-500 hover:bg-slate-200',
                  isCurrent ? 'ring-2 ring-offset-1 ring-blue-400' : '',
                ].join(' ')}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </header>

      {/* ══ セット選択バー（URLロック時は非表示）══════════════════ */}
      {!urlSetLocked && (
        <div className="flex items-center gap-2 px-8 py-2 bg-white border-b border-slate-100 flex-shrink-0 flex-wrap">
          <span className="text-xs text-slate-400 mr-1 font-medium">セット：</span>
          {ALL_SETS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => switchSet(idx)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                setIndex === idx
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {SET_LABELS[idx]}
              <span className="ml-1 hidden lg:inline font-normal opacity-70">
                — {SET_DESCRIPTIONS[idx]}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* ══ メインコンテンツ ════════════════════════════════════ */}
      <main className="flex-1 flex flex-col min-h-0 px-8 py-5 gap-4 w-full max-w-6xl mx-auto">

        {/* ══ 完了画面 ══════════════════════════════════════════ */}
        {showCompletion ? (
          <CompletionScreen
            correctCount={correctCount}
            totalCount={currentSet.length}
            answeredSet={answeredSet}
            setIndex={setIndex}
            onRetry={handleRetry}
          />
        ) : (<>

        {/* ナビゲーション */}
        <div className="flex items-center justify-between flex-shrink-0">
          <button
            onClick={() => navigateTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="flex items-center gap-1 px-5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium bg-white hover:bg-slate-50 disabled:opacity-25 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            ← 前の問題
          </button>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-base font-bold text-slate-700">
              {currentIndex + 1}
              <span className="font-normal text-slate-400"> / {currentSet.length}</span>
            </span>
            <span className="text-xs text-slate-400">問題 No.{problem.id}</span>
          </div>
          <button
            onClick={() => navigateTo(currentIndex + 1)}
            disabled={currentIndex === currentSet.length - 1}
            className="flex items-center gap-1 px-5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium bg-white hover:bg-slate-50 disabled:opacity-25 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            次の問題 →
          </button>
        </div>

        {/* タイトル */}
        <h1 className="text-xl font-bold text-slate-800 flex-shrink-0 leading-snug">
          {problem.title}
        </h1>

        {/* エディタ ＋ 出力欄（同じ flex-1 ブロックに収め、ボタンを押し出さない） */}
        <div className="flex-1 min-h-0 flex flex-col gap-2">
          <div
            ref={containerRef}
            className="flex-1 min-h-0 border border-slate-300 rounded-xl overflow-auto shadow-sm bg-white"
            style={{ minHeight: '160px' }}
          />

          {/* fill-in: 実行結果 / エラー */}
          {problem.type === 'fill-in' && output !== null && (
            <div className="flex-shrink-0 max-h-32 overflow-y-auto bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-mono text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
              <span className="text-slate-400 text-xs font-sans mr-2">出力:</span>{output}
            </div>
          )}
        </div>

        {/* predict-output: 予想入力欄 */}
        {problem.type === 'predict-output' && (
          <div className="flex-shrink-0 space-y-1.5">
            <label className="text-sm font-semibold text-slate-600">
              出力の予想を入力してください：
            </label>
            <input
              type="text"
              value={predictInput}
              onChange={e => setPredictInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && checkAnswer()}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm"
              placeholder="例: 42"
              autoComplete="off"
            />
          </div>
        )}

        {/* 答え合わせ ＋ 正誤 */}
        <div className="flex items-center gap-5 flex-shrink-0 pb-2">
          {isCorrect === true ? (
            currentIndex === currentSet.length - 1 ? (
              // 最終問題で正解 → 結果を見るボタン
              <button
                onClick={() => setShowCompletion(true)}
                className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white font-bold py-3 px-10 rounded-xl shadow-md transition text-base"
              >
                結果を見る 🎯
              </button>
            ) : (
              <button
                onClick={() => navigateTo(currentIndex + 1)}
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-3 px-10 rounded-xl shadow-md transition text-base"
              >
                次の問題 →
              </button>
            )
          ) : (
            <button
              onClick={checkAnswer}
              disabled={pyStatus === 'loading' || pyStatus === 'running'}
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-10 rounded-xl shadow-md transition text-base"
            >
              {pyStatus === 'loading' ? '⏳ 読み込み中…'
                : pyStatus === 'running' ? '▶ 実行中…'
                : '答え合わせ'}
            </button>
          )}
          {isCorrect === true  && <span className="text-green-600 font-extrabold text-2xl animate-bounce">🎉 正解！</span>}
          {isCorrect === false && <span className="text-red-500   font-extrabold text-xl">❌ 残念、違います。</span>}
        </div>

        </>)}  {/* end of showCompletion ? ... : <> ... </> */}
      </main>
    </div>
  );
}
