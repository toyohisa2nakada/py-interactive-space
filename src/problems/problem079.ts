import type { Problem } from './types';

const problem: Problem = {
  id: 79,
  title: "引数の 2 倍を返す関数 double を完成させてください",
  type: 'fill-in',
  codeWithMarker: `def double(n):
    §§§§§§§§§§§§§§§

print(double(5))
`,
  correctOutput: "10",
  requiredTokens: ['return', 'n'],
};

export default problem;
