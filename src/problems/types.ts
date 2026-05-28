export type ProblemType = 'fill-in' | 'predict-output';

export type Problem = {
  id: number;
  title: string;
  type: ProblemType;

  // fill-in 用（§ を含むテンプレート）
  codeWithMarker?: string;

  // predict-output 用（完成済みコード、読み取り専用）
  code?: string;

  // 共通: 期待する出力
  correctOutput: string;
};