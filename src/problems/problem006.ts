import type { Problem } from './types';

const problem: Problem = {
  id: 6,
  title: "引き算の結果",
  type: 'predict-output',
  code: `a = 10
b = 4
print(a - b)
`,
  correctOutput: "6",
};

export default problem;
