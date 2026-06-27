import type { Problem } from './types';

const problem: Problem = {
  id: 84,
  title: "正の数なら True を返す関数 is_positive を完成させてください。インデント（行頭の空白による字下げ）をそろえて、if と else を同じ位置から書いてください。",
  type: 'fill-in',
  codeWithMarker: `def is_positive(n):
    §§§§§§§§§§§§§§§§§§§§§§§§§§

print(is_positive(5))
print(is_positive(-3))
print(is_positive(0))
`,
  correctOutput: "True\nFalse\nFalse",
  requiredTokens: ['return', 'n'],
};

export default problem;
