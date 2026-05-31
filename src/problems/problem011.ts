import type { Problem } from './types';

const problem: Problem = {
  id: 11,
  title: "文字列「Python」の文字数を予想してください",
  type: 'predict-output',
  code: `s = "Python"
print(len(s))
`,
  correctOutput: "6",
};

export default problem;
