import type { Problem } from './types';

const problem: Problem = {
  id: 29,
  title: "3 の二乗と 4 の二乗の合計を予想してください",
  type: 'predict-output',
  code: `a = 3
b = 4
print(a ** 2 + b ** 2)
`,
  correctOutput: "25",
};

export default problem;
