import type { Problem } from './types';

const problem: Problem = {
  id: 24,
  title: "maxはリストの中で一番大きい数を返します",
  type: 'predict-output',
  code: `nums = [3, 1, 4, 1, 5, 9]
print(max(nums))
`,
  correctOutput: "9",
};

export default problem;
