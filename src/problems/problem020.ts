import type { Problem } from './types';

const problem: Problem = {
  id: 20,
  title: "文字列スライス",
  type: 'predict-output',
  code: `s = "Python"
print(s[0:3])
`,
  correctOutput: "Pyt",
};

export default problem;
