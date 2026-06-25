import type { Problem } from './types';

const problem: Problem = {
  id: 72,
  title: "リストに 4 を追加して表示するプログラムを完成させてください。プログラムは左側にスペースを作らずに書いてください",
  type: 'fill-in',
  codeWithMarker: `nums = [1, 2, 3]
§§§§§§§§§§§§§§
print(nums)
`,
  correctOutput: "[1, 2, 3, 4]",
  requiredTokens: ['append', '4'],
};

export default problem;
