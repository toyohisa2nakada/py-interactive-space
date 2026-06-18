import type { Problem } from './types';

const problem: Problem = {
  id: 27,
  title: "splitは指定された文字(この場合 , )で文字を分割します。またリストは0から順に中の要素を指定します。parts[1]は2番目の要素を表します",
  type: 'predict-output',
  code: `s = "a,b,c"
parts = s.split(",")
print(parts[1])
`,
  correctOutput: "b",
};

export default problem;
