import type { Problem } from './types';

const problem: Problem = {
  id: 172,
  title: "出力が 5 になるように、空欄に数字を入力してください",
  type: 'fill-in',
  codeWithMarker: `nums = [4, 5, 6]
print(nums[§§§])
`,
  correctOutput: "5",
  requiredTokens: ['1'],
};

export default problem;
