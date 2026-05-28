import type { Problem } from './types';

const problem: Problem = {
  id: 41,
  title: "sorted() の出力",
  type: 'predict-output',
  code: `nums = [3, 1, 4, 1, 5]
print(sorted(nums))
`,
  correctOutput: "[1, 1, 3, 4, 5]",
};

export default problem;
