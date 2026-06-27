import type { Problem } from './types';

const problem: Problem = {
  id: 85,
  title: "2 つの数のうち大きい方を返す関数 max_of_two を完成させてください。インデント（行頭の空白による字下げ）をそろえて、if と else を同じ位置から書いてください。",
  type: 'fill-in',
  codeWithMarker: `def max_of_two(a, b):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(max_of_two(3, 7))
print(max_of_two(10, 5))
print(max_of_two(4, 4))
`,
  correctOutput: "7\n10\n4",
  requiredTokens: ['return', 'a', 'b'],
};

export default problem;
