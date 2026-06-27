import type { Problem } from './types';

const problem: Problem = {
  id: 43,
  title: "文字.join(リスト)は、リストの要素を文字で結合します。例えば \" \".join([\"a\",\"b\"])は\"a b\"となります。出力を予想してください",
  type: 'predict-output',
  code: `words = ["Python", "is", "fun"]
print(" ".join(words))
`,
  correctOutput: "Python is fun",
};

export default problem;
