import type { Problem } from './types';

const problem: Problem = {
  id: 29,
  title: "べき乗の応用: 三平方",
  type: 'predict-output',
  code: `a = 3
b = 4
print(a ** 2 + b ** 2)
`,
  correctOutput: "25",
};

export default problem;
