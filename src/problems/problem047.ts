import type { Problem } from './types';

const problem: Problem = {
  id: 47,
  title: "リストの count()",
  type: 'predict-output',
  code: `nums = [1, 2, 2, 3, 2, 4]
print(nums.count(2))
`,
  correctOutput: "3",
};

export default problem;
