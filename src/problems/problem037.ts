import type { Problem } from './types';

const problem: Problem = {
  id: 37,
  title: "リスト内包表記で 2 倍のリストを作ります。結果を予想してください",
  type: 'predict-output',
  code: `nums = [x * 2 for x in range(5)]
print(nums)
`,
  correctOutput: "[0, 2, 4, 6, 8]",
};

export default problem;
