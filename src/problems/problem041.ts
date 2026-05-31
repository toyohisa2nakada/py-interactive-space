import type { Problem } from './types';

const problem: Problem = {
  id: 41,
  title: "sorted() で並べ替えたリストを予想してください",
  type: 'predict-output',
  code: `nums = [3, 1, 4, 1, 5]
print(sorted(nums))
`,
  correctOutput: "[1, 1, 3, 4, 5]",
};

export default problem;
