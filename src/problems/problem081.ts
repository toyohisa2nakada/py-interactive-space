import type { Problem } from './types';

const problem: Problem = {
  id: 81,
  title: "n の二乗を返す関数 square を完成させてください。例: square(3) → 9、square(5) → 25、square(0) → 0",
  type: 'fill-in',
  codeWithMarker: `def square(n):
    §§§§§§§§§§§§§§§§§§§§§§§

print(square(3))
print(square(5))
print(square(0))
`,
  correctOutput: "9\n25\n0",
  requiredTokens: ['return', 'n'],
};

export default problem;
