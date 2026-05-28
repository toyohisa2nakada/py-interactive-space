import type { Problem } from './types';

const problem: Problem = {
  id: 33,
  title: "リストのソートと最小値",
  type: 'predict-output',
  code: `nums = [5, 3, 8, 1, 9, 2]
nums.sort()
print(nums[0])
`,
  correctOutput: "1",
};

export default problem;
