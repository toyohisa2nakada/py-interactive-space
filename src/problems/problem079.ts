import type { Problem } from './types';

const problem: Problem = {
  id: 79,
  title: "引数の 3 倍を返す関数 triple を完成させてください",
  type: 'fill-in',
  codeWithMarker: `def triple(n):
    §§§§§§§§§§§§§§§

print(triple(2))
print(triple(3))
print(triple(5))
`,
  correctOutput: "6\n9\n15",
  requiredTokens: ['return', 'n'],
};

export default problem;
