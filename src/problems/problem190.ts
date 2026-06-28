import type { Problem } from './types';

const problem: Problem = {
  id: 190,
  title: "変数 x に代入された値を予想してください",
  type: 'predict-output',
  code: `x = 42
print(x)
`,
  correctOutput: "42",
};

export default problem;
