import type { Problem } from './types';

const problem: Problem = {
  id: 5,
  title: "a と b の足し算の結果を予想してください",
  type: 'predict-output',
  code: `a = 8
b = 5
print(a + b)
`,
  correctOutput: "13",
};

export default problem;
