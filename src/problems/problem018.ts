import type { Problem } from './types';

const problem: Problem = {
  id: 18,
  title: "リストの長さ",
  type: 'predict-output',
  code: `print(len([1, 2, 3, 4, 5]))
`,
  correctOutput: "5",
};

export default problem;
