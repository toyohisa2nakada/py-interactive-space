import type { Problem } from './types';

const problem: Problem = {
  id: 24,
  title: "リストの最大値",
  type: 'predict-output',
  code: `nums = [3, 1, 4, 1, 5, 9]
print(max(nums))
`,
  correctOutput: "9",
};

export default problem;
