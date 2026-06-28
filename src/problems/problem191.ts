import type { Problem } from './types';

const problem: Problem = {
  id: 191,
  title: "出力を予想してください",
  type: 'predict-output',
  code: `a = 8
b = 5
print(a + b)
`,
  correctOutput: "13",
};

export default problem;
