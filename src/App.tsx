import { useState, useRef, useEffect, useCallback } from 'react';
import { EditorView, Decoration, type DecorationSet } from '@codemirror/view';
import { EditorState, StateField } from '@codemirror/state';
import type { Problem } from './problems';
import { problemSet01 } from './problems/index01';
import { problemSet02 } from './problems/index02';
import { problemSet03 } from './problems/index03';
import { problemSet04 } from './problems/index04';
import { problemSet05 } from './problems/index05';
import { problemSet06 } from './problems/index06';
import type { PyodideInterface } from 'pyodide';

const ALL_SETS = [problemSet01, problemSet02, problemSet03, problemSet04, problemSet05, problemSet06];
const SET_LABELS = [
  'セット1', 'セット2', 'セット3', 'セット4', 'セット5', 'セット6',
];
const SET_DESCRIPTIONS = [
  '超入門：変数・演算',
  '入門：if・forループ',
  '初中級：ループ・リスト',
  '中級：文字列・関数',
  '中上級：関数・多テスト',
  '上級：全文作成・応用',
];

// ─── Pyodide ロード ───────────────────────────────────────────
let pyodideInstance: PyodideInterface | null = null;

async function getPyodide(): Promise<PyodideInterface> {
  if (pyodideInstance) return pyodideInstance;
  // @ts-ignore
  const loaded = await window.loadPyodide({
    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/',
  }) as PyodideInterface;

  pyodideInstance = loaded;
  return loaded;
}

// ─── CodeMirror ヘルパー ──────────────────────────────────────
function buildEditorState(problem: Problem, readOnly = false): EditorState {
  const baseExtensions = [
    EditorView.theme({
      '&': { fontSize: '14px' },
      '.cm-content': { fontFamily: 'monospace', padding: '8px 0' },
      '.cm-line': { padding: '0 8px' },
      '.readonly-bg': { backgroundColor: 'lightgrey', color: '#6b7280' },
      '.editable-hole': { backgroundColor: '#fff', color: '#000' },
    }),
  ];

  // predict-output: 完全読み取り専用
  if (readOnly || problem.type === 'predict-output') {
    return EditorState.create({
      doc: problem.code ?? '',
      extensions: [
        ...baseExtensions,
        EditorState.readOnly.of(true),
        EditorView.theme({
          '.cm-content': { backgroundColor: '#f3f4f6' },
        }),
      ],
    });
  }

  // fill-in: 穴あきエディタ
  const raw = problem.codeWithMarker ?? '';
  const markerMatch = raw.match(/§+/);
  const markerString = markerMatch ? markerMatch[0] : '§';
  const holeLength = markerString.length;
  const holeFrom = raw.indexOf(markerString);
  const holeTo = holeFrom + holeLength;
  const doc = raw.replace(markerString, ' '.repeat(holeLength));

  const rangeField = StateField.define<{ from: number; to: number }>({
    create: () => ({ from: holeFrom, to: holeTo }),
    update(value, tr) {
      let { from, to } = value;
      tr.changes.iterChanges((fromA, toA, fromB, toB) => {
        if (fromA >= from && toA <= to) {
          to += (toB - fromB) - (toA - fromA);
        } else if (toA <= from) {
          const delta = (toB - fromB) - (toA - fromA);
          from += delta;
          to += delta;
        }
      });
      return { from, to };
    },
  });

  const lockFilter = EditorState.transactionFilter.of((tr) => {
    if (!tr.docChanged) return tr;
    const cur = tr.startState.field(rangeField);
    let allowed = true;
    tr.changes.iterChanges((fromA, toA, fromB, toB) => {
      if (fromA < cur.from || toA > cur.to) allowed = false;
      if (cur.to - cur.from === 1 && fromA === cur.from && toA === cur.to && fromB === toB) {
        allowed = false;
      }
    });
    return allowed ? tr : [];
  });

  const highlightExtension = StateField.define<DecorationSet>({
    create(state) {
      const range = state.field(rangeField);
      const docLen = state.doc.length;
      if (range.from < 0 || range.to > docLen || range.from >= range.to) {
        return Decoration.set([], true);
      }
      return Decoration.set([
        Decoration.mark({ class: 'readonly-bg' }).range(0, range.from),
        Decoration.mark({ class: 'editable-hole' }).range(range.from, range.to),
        Decoration.mark({ class: 'readonly-bg' }).range(range.to, docLen),
      ], true);
    },
    update(_dec, tr) {
      const range = tr.state.field(rangeField);
      const docLen = tr.state.doc.length;
      if (range.from >= range.to || range.from < 0 || range.to > docLen) {
        return Decoration.set([], true);
      }
      return Decoration.set([
        Decoration.mark({ class: 'readonly-bg' }).range(0, range.from),
        Decoration.mark({ class: 'editable-hole' }).range(range.from, range.to),
        Decoration.mark({ class: 'readonly-bg' }).range(range.to, docLen),
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
  const [setIndex, setSetIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [predictInput, setPredictInput] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [pyStatus, setPyStatus] = useState<'idle' | 'loading' | 'ready' | 'running'>('idle');

  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewRef = useRef<EditorView | null>(null);

  const currentSet = ALL_SETS[setIndex];
  const problem = currentSet[currentIndex];

  const switchSet = useCallback((idx: number) => {
    setSetIndex(idx);
    setCurrentIndex(0);
    setIsCorrect(null);
    setOutput(null);
    setPredictInput('');
  }, []);

  // ─── エディタ初期化（問題またはセットが変わるたびに再構築）
  useEffect(() => {
    if (!containerRef.current) return;

    viewRef.current?.destroy();

    const state = buildEditorState(problem);
    const view = new EditorView({ state, parent: containerRef.current });
    viewRef.current = view;

    // リセット
    setIsCorrect(null);
    setOutput(null);
    setPredictInput('');

    return () => {
      view.destroy();
      viewRef.current = null;
    };
  }, [setIndex, currentIndex]);

  // ─── Pyodide 事前ロード
  useEffect(() => {
    setPyStatus('loading');
    getPyodide().then(() => setPyStatus('ready'));
  }, []);

  // ─── 答え合わせ
  const checkAnswer = useCallback(async () => {
    if (!viewRef.current) return;

    if (problem.type === 'predict-output') {
      // 実行せず文字列比較
      const correct = predictInput.trim() === problem.correctOutput.trim();
      setIsCorrect(correct);
      return;
    }

    // fill-in: Pyodide で実行して比較
    if (pyStatus !== 'ready') return;
    setPyStatus('running');

    try {
      const code = viewRef.current.state.doc.toString();
      const py = await getPyodide();

      // print() の出力をキャプチャ
      let captured = '';
      py.globals.set('_output_lines', py.toPy([]));
      await py.runPythonAsync(`
import sys, io
_buf = io.StringIO()
sys.stdout = _buf
`);
      await py.runPythonAsync(code);
      captured = await py.runPythonAsync(`
sys.stdout = sys.__stdout__
_buf.getvalue().strip()
`) as string;

      setOutput(captured);
      setIsCorrect(captured === problem.correctOutput.trim());
    } catch (e) {
      setOutput(`エラー: ${(e as Error).message}`);
      setIsCorrect(false);
    } finally {
      setPyStatus('ready');
    }
  }, [problem, predictInput, pyStatus]);

  // ─── UI
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6 space-y-4">

        {/* セット選択 */}
        <div className="border-b border-gray-200 pb-3">
          <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">問題セット</p>
          <div className="flex flex-wrap gap-2">
            {ALL_SETS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => switchSet(idx)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                  setIndex === idx
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="font-bold">{SET_LABELS[idx]}</span>
                <span className="ml-1 hidden sm:inline opacity-75">— {SET_DESCRIPTIONS[idx]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ナビゲーション */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentIndex(i => i - 1)}
            disabled={currentIndex === 0}
            className="px-4 py-1 rounded border text-sm disabled:opacity-30"
          >
            ← 前の問題
          </button>
          <span className="text-sm text-gray-500">
            問題 {currentIndex + 1} / {currentSet.length}
            <span className="ml-2 text-gray-400 text-xs">(問題 No.{problem.id})</span>
          </span>
          <button
            onClick={() => setCurrentIndex(i => i + 1)}
            disabled={currentIndex === currentSet.length - 1}
            className="px-4 py-1 rounded border text-sm disabled:opacity-30"
          >
            次の問題 →
          </button>
        </div>

        {/* タイトル */}
        <h1 className="text-lg font-semibold text-gray-800">{problem.title}</h1>

        {/* エディタ */}
        <div ref={containerRef} className="border border-gray-300 rounded overflow-hidden" />

        {/* predict-output: 予想入力欄 */}
        {problem.type === 'predict-output' && (
          <div className="space-y-1">
            <label className="text-sm text-gray-600">出力の予想を入力してください：</label>
            <input
              type="text"
              value={predictInput}
              onChange={e => setPredictInput(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 font-mono text-sm"
              placeholder="例: 42"
            />
          </div>
        )}

        {/* fill-in: 実行結果表示 */}
        {problem.type === 'fill-in' && output !== null && (
          <div className="bg-gray-50 border border-gray-200 rounded px-3 py-2 font-mono text-sm text-gray-700">
            出力: {output}
          </div>
        )}

        {/* 答え合わせボタン */}
        <div className="flex items-center gap-4">
          <button
            onClick={checkAnswer}
            disabled={pyStatus === 'loading' || pyStatus === 'running'}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-2 px-6 rounded shadow transition"
          >
            {pyStatus === 'loading' && '読み込み中...'}
            {pyStatus === 'running' && '実行中...'}
            {(pyStatus === 'ready' || pyStatus === 'idle') && '答え合わせ'}
          </button>

          {isCorrect === true && <span className="text-green-600 font-bold text-lg">🎉 正解！</span>}
          {isCorrect === false && <span className="text-red-500 font-bold text-lg">❌ 残念、違います。</span>}
        </div>
      </div>
    </div>
  );
}