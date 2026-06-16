import type { Problem } from './types';

const problem: Problem = {
  id: 26,
  title: "appendはリストに要素を追加します",
  type: 'predict-output',
  code: `nums = []
for i in range(3):
    nums.append(i * 2)
print(sum(nums))
`,
  correctOutput: "6",
};

export default problem;
