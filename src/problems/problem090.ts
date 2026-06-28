import type { Problem } from './types';

const problem: Problem = {
  id: 90,
  title: "リスト内の正の数の個数を返すプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `nums = [1, -2, 3, -4, 5]
count = 0
for i in nums:
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
print(count)
`,
  correctOutput: "3",
  requiredTokens: ['i', 'count'],
};

export default problem;
