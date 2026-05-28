import type { Problem } from './types';

const problem: Problem = {
  id: 88,
  title: "関数を完成せよ⑧: repeat_str（多テスト）",
  type: 'fill-in',
  codeWithMarker: `# 関数 repeat_str を完成させよ（文字列 s を n 回繰り返して返す）
# テスト: repeat_str("ab",3)→"ababab", repeat_str("x",5)→"xxxxx"
def repeat_str(s, n):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(repeat_str("ab", 3))
print(repeat_str("x", 5))
print(repeat_str("hi", 1))
`,
  correctOutput: "ababab\nxxxxx\nhi",
};

export default problem;
