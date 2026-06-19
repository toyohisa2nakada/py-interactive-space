import type { Problem } from './types';

const problem: Problem = {
  id: 37,
  title: "リスト内包表記でリストを作ります。出力はスペースを入れず [0,1,2] のように括弧もつけてください。結果を予想してください",
  type: 'predict-output',
  code: `nums = [x for x in range(5)]
print(nums)
`,
  correctOutput: "[0,1,2,3,4]",
};

export default problem;
