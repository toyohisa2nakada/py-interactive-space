import type { Problem } from './types';

const problem: Problem = {
  id: 56,
  title: "リストの穴埋め: 合計が 15 になるように",
  type: 'fill-in',
  codeWithMarker: `# リストの合計が 15 になるように空欄を埋めよ
nums = [1, 2, §, 4, 5]
print(sum(nums))
`,
  correctOutput: "15",
};

export default problem;
