import type { Problem } from './types';

const problem: Problem = {
  id: 50,
  title: "min() リストの最小値",
  type: 'predict-output',
  code: `nums = [3, 1, 4, 1, 5, 9]
print(min(nums))
`,
  correctOutput: "1",
};

export default problem;
