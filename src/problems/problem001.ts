import type { Problem } from './types';

const problem: Problem = {
  id: 1,
  title: "print(3) の出力を予想してください",
  type: 'predict-output',
  code: `
print(3)
`,
  correctOutput: "3",
};

export default problem;
