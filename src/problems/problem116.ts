import type { Problem } from './types';

const problem: Problem = {
  id: 116,
  title: "print(42 + 1) の出力を予想してください",
  type: 'predict-output',
  code: `print(42 + 1)
`,
  correctOutput: "43",
};

export default problem;
