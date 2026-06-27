import type { Problem } from './types';

const problem: Problem = {
  id: 83,
  title: "偶数なら True 奇数なら False を返す関数 is_even を完成させてください。% は余りを計算します。また、インデント（行頭の空白による字下げ）をそろえて、if と else を同じ位置から書いてください。",
  type: 'fill-in',
  codeWithMarker: `def is_even(n):
    §§§§§§§§§§§§§§§§§§§§§§§§§

print(is_even(4))
print(is_even(7))
print(is_even(0))
`,
  correctOutput: "True\nFalse\nTrue",
  requiredTokens: ['return', 'n'],
};

export default problem;
