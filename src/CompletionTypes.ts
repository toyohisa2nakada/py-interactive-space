// 完了演出コンポーネントの共通インターフェース
// 別の演出に切り替えるときは App.tsx の import 1 行を変えるだけでOK

export interface CompletionScreenProps {
  correctCount: number;       // 正解した問題数
  totalCount: number;         // セットの総問題数
  answeredSet: Set<string>;   // 正解済みキー集合（"setIndex-idx" 形式）
  setIndex: number;           // 現在のセット番号
  // onRetry: () => void;        // もう一度挑戦ボタンのコールバック
}
