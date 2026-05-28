import type { Problem } from './types';

const problem: Problem = {
  id: 10,
  title: "文字列の繰り返し",
  type: 'predict-output',
  code: `print("Ha" * 3)
`,
  correctOutput: "HaHaHa",
};

export default problem;
