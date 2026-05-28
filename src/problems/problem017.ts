import type { Problem } from './types';

const problem: Problem = {
  id: 17,
  title: "リストのインデックス",
  type: 'predict-output',
  code: `nums = [10, 20, 30]
print(nums[1])
`,
  correctOutput: "20",
};

export default problem;
