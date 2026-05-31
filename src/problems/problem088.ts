import type { Problem } from './types';

const problem: Problem = {
  id: 88,
  title: "文字列を n 回繰り返す関数 repeat_str を完成させてください",
  type: 'fill-in',
  codeWithMarker: `# 文字列 s を n 回繰り返して返す関数 repeat_str を完成させてください
# 例: repeat_str("ab", 3) → "ababab"、repeat_str("x", 5) → "xxxxx"
def repeat_str(s, n):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(repeat_str("ab", 3))
print(repeat_str("x", 5))
print(repeat_str("hi", 1))
`,
  correctOutput: "ababab\nxxxxx\nhi",
  requiredTokens: ['return', 's', 'n'],
};

export default problem;
