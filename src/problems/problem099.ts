import type { Problem } from './types';

const problem: Problem = {
  id: 99,
  title: "関数を作れ②: reverse_string（多テスト）",
  type: 'fill-in',
  codeWithMarker: `# 関数 reverse_string を作れ（文字列を逆順にして返す）
# テスト: reverse_string("hello")→"olleh", reverse_string("abc")→"cba"

§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(reverse_string("hello"))
print(reverse_string("abc"))
print(reverse_string("a"))
`,
  correctOutput: "olleh\ncba\na",
};

export default problem;
