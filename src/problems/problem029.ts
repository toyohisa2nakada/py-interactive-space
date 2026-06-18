import type { Problem } from './types';

const problem: Problem = {
  id: 29,
  title: "n ** 2 は n の2乗を計算します",
  type: 'predict-output',
  code: `a = 3
b = 4
print(a ** 2 + b ** 2)
`,
  correctOutput: "25",
};

export default problem;
