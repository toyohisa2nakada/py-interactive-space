import type { Problem } from './types';

const problem: Problem = {
  id: 5,
  title: "足し算の結果",
  type: 'predict-output',
  code: `a = 8
b = 5
print(a + b)
`,
  correctOutput: "13",
};

export default problem;
