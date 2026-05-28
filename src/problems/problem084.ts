import type { Problem } from './types';

const problem: Problem = {
  id: 84,
  title: "関数を完成せよ④: is_positive（多テスト）",
  type: 'fill-in',
  codeWithMarker: `# 関数 is_positive を完成させよ（正の数なら True、それ以外は False）
# テスト: is_positive(5)→True, is_positive(-3)→False, is_positive(0)→False
def is_positive(n):
    §§§§§§§§§§§§§§§§§§§§§§§§§§

print(is_positive(5))
print(is_positive(-3))
print(is_positive(0))
`,
  correctOutput: "True\nFalse\nFalse",
};

export default problem;
