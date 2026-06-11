/**
 * 案C — スコアカード完了画面
 *
 * 別の演出に切り替えたいときは App.tsx の以下の 1 行を変えてください：
 *   import { CompletionScreen } from './CompletionScreenC';
 *                                               ↑ここだけ変える
 */
import { useEffect, useState, useRef } from 'react';
import type { CompletionScreenProps } from './CompletionTypes';

// ── 紙吹雪ピース生成 ──────────────────────────────────────────
const COLORS = ['#f87171','#fb923c','#fbbf24','#34d399','#60a5fa','#a78bfa','#f472b6'];

function Confetti() {
  const pieces = useRef(
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: COLORS[i % COLORS.length],
      delay: `${Math.random() * 2}s`,
      duration: `${2.5 + Math.random() * 2}s`,
      size: `${6 + Math.random() * 8}px`,
    }))
  );

  return (
    <>
      {pieces.current.map(p => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </>
  );
}

// ── メッセージ ────────────────────────────────────────────────
function getMessage(pct: number): string {
  if (pct === 100) return '全問正解！完璧です！🏆';
  if (pct >= 80)  return 'よくできました！もう少しで満点！🌟';
  if (pct >= 60)  return 'いい調子です！もう一度挑戦してみましょう！💪';
  return '難しかったですね。復習してもう一度挑戦してみましょう！📚';
}

// ── メインコンポーネント ──────────────────────────────────────
export function CompletionScreen({
  correctCount,
  totalCount,
  answeredSet,
  setIndex,
}: CompletionScreenProps) {
  const pct       = Math.round((correctCount / totalCount) * 100);
  const isPerfect = correctCount === totalCount;

  // 問題ごとの正解状況
  const solvedMap = Array.from({ length: totalCount }, (_, i) =>
    answeredSet.has(`${setIndex}-${i}`)
  );

  // バーとスコアのアニメーション用
  const [barWidth, setBarWidth]   = useState('0%');
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setBarWidth(`${pct}%`), 100);
    const t2 = setTimeout(() => setShowScore(true), 200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pct]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* 紙吹雪（全問正解時のみ） */}
      {isPerfect && <Confetti />}

      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-2xl text-center space-y-6 relative z-10">

        {/* タイトル */}
        <h1 className="text-3xl font-extrabold text-slate-800">
          {isPerfect ? '🎉 パーフェクト！' : '✅ セット完了！'}
        </h1>

        {/* スコア大表示 */}
        <div className="space-y-1">
          {showScore && (
            <div className="anim-score-pop inline-block">
              <span className="text-7xl font-black text-blue-600">{correctCount}</span>
              <span className="text-3xl font-bold text-slate-400"> / {totalCount}</span>
            </div>
          )}
          <p className="text-slate-500 font-medium">問正解</p>
        </div>

        {/* 正解率バー */}
        <div className="space-y-1">
          <div className="w-full bg-slate-100 rounded-full h-5 overflow-hidden">
            <div
              className="h-full rounded-full bg-green-500 transition-all duration-[1200ms] ease-out"
              style={{ width: barWidth }}
            />
          </div>
          <p className="text-slate-400 text-sm font-medium">{pct}%</p>
        </div>

        {/* メッセージ */}
        <p className="text-lg font-semibold text-slate-600">{getMessage(pct)}</p>
        <p className="text-lg font-semibold text-slate-900 animate-pulse">この画面を講師に見せてください！！</p>

        {/* 問題ごとの結果グリッド */}
        <div>
          <p className="text-xs text-slate-400 mb-2 font-medium">問題ごとの結果</p>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {solvedMap.map((ok, i) => (
              <div
                key={i}
                title={`問題 ${i + 1}`}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                  ok
                    ? 'bg-green-500 text-white'
                    : 'bg-red-100 text-red-400 border border-red-200'
                }`}
              >
                {ok ? '✓' : i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* もう一度挑戦ボタン */}
        {/* <button
          onClick={onRetry}
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-10 rounded-xl shadow-md transition text-base"
        >
          もう一度挑戦する ↺
        </button> */}
      </div>
    </div>
  );
}
