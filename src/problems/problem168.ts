import type { Problem } from './types';

const problem: Problem = {
  id: 168,
  title: "リスト内包表記でリストを作ります。出力はスペースを入れず [0,1,2] のように括弧もつけてください。x ** 2 は x の二乗を意味します。結果を予想してください",
  type: 'predict-output',
  code: `sq = [x ** 2 for x in range(1, 6)]
print(sq)
`,
  correctOutput: "[1,4,9,16,25]",
};

export default problem;
