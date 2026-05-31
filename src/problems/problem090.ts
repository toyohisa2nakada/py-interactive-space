import type { Problem } from './types';

const problem: Problem = {
  id: 90,
  title: "リスト内の正の数の個数を返す関数 count_positive を完成させてください",
  type: 'fill-in',
  codeWithMarker: `# リスト内の正の数の個数を返す関数 count_positive を完成させてください
# 例: count_positive([1,-2,3,-4,5]) → 3、count_positive([-1,-2,-3]) → 0
def count_positive(nums):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(count_positive([1, -2, 3, -4, 5]))
print(count_positive([-1, -2, -3]))
print(count_positive([]))
`,
  correctOutput: "3\n0\n0",
  requiredTokens: ['return', 'nums'],
};

export default problem;
