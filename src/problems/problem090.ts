import type { Problem } from './types';

const problem: Problem = {
  id: 90,
  title: "関数を完成せよ⑩: count_positive（多テスト）",
  type: 'fill-in',
  codeWithMarker: `# 関数 count_positive を完成させよ（リストの中の正の数の個数を返す）
# テスト: count_positive([1,-2,3,-4,5])→3, count_positive([-1,-2,-3])→0
def count_positive(nums):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(count_positive([1, -2, 3, -4, 5]))
print(count_positive([-1, -2, -3]))
print(count_positive([]))
`,
  correctOutput: "3\n0\n0",
};

export default problem;
