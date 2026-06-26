import type { Problem } from './types';

const problem: Problem = {
  id: 161,
  title: "リストの 2 番目の要素を予想してください",
  type: 'predict-output',
  code: `nums = [4, 5, 6]
print(nums[1])
`,
  correctOutput: "5",
};

export default problem;
