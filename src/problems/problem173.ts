import type { Problem } from './types';

const problem: Problem = {
  id: 173,
  title: "出力が 30 になるように、空欄に数字を入力してください",
  type: 'fill-in',
  codeWithMarker: `nums = [10, 20, 30]
print(nums[§§§])
`,
  correctOutput: "30",
  requiredTokens: ['-1'],
};

export default problem;
