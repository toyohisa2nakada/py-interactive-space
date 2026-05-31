import type { Problem } from './types';

const problem: Problem = {
  id: 24,
  title: "リストの中で一番大きい数を予想してください",
  type: 'predict-output',
  code: `nums = [3, 1, 4, 1, 5, 9]
print(max(nums))
`,
  correctOutput: "9",
};

export default problem;
