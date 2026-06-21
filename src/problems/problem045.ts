import type { Problem } from './types';

const problem: Problem = {
  id: 45,
  title: "range(1,11) は [1,2,...,9,10] のリストを作成します。sum はリスト要素の合計を計算します。出力を予想してください",
  type: 'predict-output',
  code: `print(sum(range(1, 11)))
`,
  correctOutput: "55",
};

export default problem;
