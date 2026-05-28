import type { Problem } from './types';

const problem: Problem = {
  id: 8,
  title: "切り捨て除算の結果",
  type: 'predict-output',
  code: `a = 17
b = 5
print(a // b)
`,
  correctOutput: "3",
};

export default problem;
