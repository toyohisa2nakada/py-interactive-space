import type { Problem } from './types';

const problem: Problem = {
  id: 171,
  title: "リストの中で一番小さい数を予想してください",
  type: 'predict-output',
  code: `nums = [-1, -3, -2, -8, -4]
print(min(nums))
`,
  correctOutput: "-8",
};

export default problem;
