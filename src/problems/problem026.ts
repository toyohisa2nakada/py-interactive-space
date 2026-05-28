import type { Problem } from './types';

const problem: Problem = {
  id: 26,
  title: "リストへのappend",
  type: 'predict-output',
  code: `nums = []
for i in range(3):
    nums.append(i * 2)
print(nums)
`,
  correctOutput: "[0, 2, 4]",
};

export default problem;
