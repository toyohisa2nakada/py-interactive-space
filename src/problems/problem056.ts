import type { Problem } from './types';

const problem: Problem = {
  id: 56,
  title: "リストの合計が 15 になるよう、空欄の数字を入れてください",
  type: 'fill-in',
  codeWithMarker: `# リストの合計が 15 になるよう、空欄に数字を入れてください
nums = [1, 2, §§§, 4, 5]
print(sum(nums))
`,
  correctOutput: "15",
};

export default problem;
