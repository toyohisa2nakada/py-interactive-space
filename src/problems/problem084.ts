import type { Problem } from './types';

const problem: Problem = {
  id: 84,
  title: "正の数なら True を返す関数 is_positive を完成させてください",
  type: 'fill-in',
  codeWithMarker: `# 正の数なら True、それ以外は False を返す関数 is_positive を完成させてください
# 例: is_positive(5) → True、is_positive(-3) → False、is_positive(0) → False
def is_positive(n):
    §§§§§§§§§§§§§§§§§§§§§§§§§§

print(is_positive(5))
print(is_positive(-3))
print(is_positive(0))
`,
  correctOutput: "True\nFalse\nFalse",
  requiredTokens: ['return', 'n'],
};

export default problem;
