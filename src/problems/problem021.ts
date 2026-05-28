import type { Problem } from './types';

const problem: Problem = {
  id: 21,
  title: "文字列: upper()",
  type: 'predict-output',
  code: `s = "hello"
print(s.upper())
`,
  correctOutput: "HELLO",
};

export default problem;
