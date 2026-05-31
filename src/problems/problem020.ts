import type { Problem } from './types';

const problem: Problem = {
  id: 20,
  title: "文字列「Python」の最初の 3 文字を取り出した結果を予想してください",
  type: 'predict-output',
  code: `s = "Python"
print(s[0:3])
`,
  correctOutput: "Pyt",
};

export default problem;
