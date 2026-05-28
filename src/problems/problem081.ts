import type { Problem } from './types';

const problem: Problem = {
  id: 81,
  title: "関数を完成せよ①: square（多テスト）",
  type: 'fill-in',
  codeWithMarker: `# 関数 square を完成させよ（n の 2 乗を返す）
# テスト: square(3)→9, square(5)→25, square(0)→0
def square(n):
    §§§§§§§§§§§§§§§§§§§§§§§

print(square(3))
print(square(5))
print(square(0))
`,
  correctOutput: "9\n25\n0",
};

export default problem;
