import type { Problem } from './types';

const problem: Problem = {
  id: 89,
  title: "関数を完成せよ⑨: sum_list（多テスト）",
  type: 'fill-in',
  codeWithMarker: `# 関数 sum_list を完成させよ（リストの合計を返す）
# テスト: sum_list([1,2,3])→6, sum_list([10,20,30])→60, sum_list([])→0
def sum_list(nums):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(sum_list([1, 2, 3]))
print(sum_list([10, 20, 30]))
print(sum_list([]))
`,
  correctOutput: "6\n60\n0",
};

export default problem;
