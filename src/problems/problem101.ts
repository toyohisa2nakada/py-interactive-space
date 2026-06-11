import type { Problem } from './types';

const problem: Problem = {
  id: 101,
  title: "リストの最後の要素を予想してください",
  type: 'predict-output',
  code: `nums = [10, 20, 30]
print(nums[-1])
`,
  correctOutput: "30",
};

export default problem;
