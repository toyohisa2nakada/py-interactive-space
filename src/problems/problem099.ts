import type { Problem } from './types';

const problem: Problem = {
  id: 99,
  title: "文字列を逆順にする関数 reverse_string を作ってください",
  type: 'fill-in',
  codeWithMarker: `# 文字列を逆順にして返す関数 reverse_string を作ってください
# 例: reverse_string("hello") → "olleh"、reverse_string("abc") → "cba"

§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(reverse_string("hello"))
print(reverse_string("abc"))
print(reverse_string("a"))
`,
  correctOutput: "olleh\ncba\na",
  requiredTokens: ['def', 'reverse_string', 'return'],
};

export default problem;
