import type { Problem } from './types';

const problem: Problem = {
  id: 83,
  title: "関数を完成せよ③: is_even（多テスト）",
  type: 'fill-in',
  codeWithMarker: `# 関数 is_even を完成させよ（偶数なら True、奇数なら False を返す）
# テスト: is_even(4)→True, is_even(7)→False, is_even(0)→True
def is_even(n):
    §§§§§§§§§§§§§§§§§§§§§§§§§

print(is_even(4))
print(is_even(7))
print(is_even(0))
`,
  correctOutput: "True\nFalse\nTrue",
};

export default problem;
