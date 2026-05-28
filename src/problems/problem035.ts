import type { Problem } from './types';

const problem: Problem = {
  id: 35,
  title: "剰余演算 %",
  type: 'predict-output',
  code: `x = 10
y = 3
print(x % y)
`,
  correctOutput: "1",
};

export default problem;
