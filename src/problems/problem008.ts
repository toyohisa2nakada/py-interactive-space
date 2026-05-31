import type { Problem } from './types';

const problem: Problem = {
  id: 8,
  title: "a を b で切り捨て除算した結果を予想してください",
  type: 'predict-output',
  code: `a = 17
b = 5
print(a // b)
`,
  correctOutput: "3",
};

export default problem;
