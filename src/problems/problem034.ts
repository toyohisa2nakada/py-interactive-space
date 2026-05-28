import type { Problem } from './types';

const problem: Problem = {
  id: 34,
  title: "int()による文字列変換",
  type: 'predict-output',
  code: `print(int("42"))
`,
  correctOutput: "42",
};

export default problem;
