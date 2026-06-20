import type { Problem } from './types';

const problem: Problem = {
  id: 135,
  title: "sorted() に文字列を渡すと、1文字ずつに分けて並べ替えたリストが返ります。出力はスペースを入れず ['a','b'] のようにシングルクォートと[ ]を付けて入力してください",
  type: 'predict-output',
  code: `s = "apple"
print(sorted(s))
`,
  correctOutput: "['a','e','l','p','p']",
};

export default problem;
