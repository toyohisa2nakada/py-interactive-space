import type { Problem } from './types';

const problem: Problem = {
  id: 27,
  title: "文字列を分割して 2 番目の要素を取り出します。結果を予想してください",
  type: 'predict-output',
  code: `s = "a,b,c"
parts = s.split(",")
print(parts[1])
`,
  correctOutput: "b",
};

export default problem;
