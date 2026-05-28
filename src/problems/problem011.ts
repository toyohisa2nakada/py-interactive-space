import type { Problem } from './types';

const problem: Problem = {
  id: 11,
  title: "文字列の長さ",
  type: 'predict-output',
  code: `s = "Python"
print(len(s))
`,
  correctOutput: "6",
};

export default problem;
