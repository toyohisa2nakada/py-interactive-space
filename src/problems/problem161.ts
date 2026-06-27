import type { Problem } from './types';

const problem: Problem = {
  id: 161,
  title: "リストの要素は、0から順に数えます。例えば2個目の要素は nums[1] と表します。出力を予想してください",
  type: 'predict-output',
  code: `nums = [4, 5, 6]
print(nums[1])
`,
  correctOutput: "5",
};

export default problem;
