import type { Problem } from './types';

const problem: Problem = {
  id: 171,
  title: "minは最小値を出力します。プログラムの実行結果を予測してください",
  type: 'predict-output',
  code: `nums = [-1, -3, -2, -8, -4]
print(min(nums))
`,
  correctOutput: "-8",
};

export default problem;
