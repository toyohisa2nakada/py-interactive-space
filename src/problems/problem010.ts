import type { Problem } from './types';

const problem: Problem = {
  id: 10,
  title: "文字列「Ha」を 3 回繰り返した結果を予想してください",
  type: 'predict-output',
  code: `print("Ha" * 3)
`,
  correctOutput: "HaHaHa",
};

export default problem;
