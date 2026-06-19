import type { Problem } from './types';

const problem: Problem = {
  id: 128,
  title: "n の p 乗を返す関数 power を完成させてください。例: power(2, 3) → 8、power(5, 2) → 25、power(2, 0) → 1",
  type: 'fill-in',
  codeWithMarker: `def power(n, p):
    §§§§§§§§§§§§§§§§§§§§§§§

print(power(2, 3))
print(power(5, 2))
print(power(2, 0))
`,
  correctOutput: "8\n25\n1",
  requiredTokens: ['return', 'n', 'p'],
};

export default problem;
