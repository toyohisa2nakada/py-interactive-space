import type { Problem } from './types';

const problem: Problem = {
  id: 85,
  title: "関数を完成せよ⑤: max_of_two（多テスト）",
  type: 'fill-in',
  codeWithMarker: `# 関数 max_of_two を完成させよ（a と b の大きい方を返す）
# テスト: max_of_two(3,7)→7, max_of_two(10,5)→10, max_of_two(4,4)→4
def max_of_two(a, b):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(max_of_two(3, 7))
print(max_of_two(10, 5))
print(max_of_two(4, 4))
`,
  correctOutput: "7\n10\n4",
};

export default problem;
