import type { Problem } from './types';

const problem: Problem = {
  id: 3,
  title: "変数の値は？",
  type: 'predict-output',
  code: `x = 42
print(x)
`,
  correctOutput: "42",
};

export default problem;
