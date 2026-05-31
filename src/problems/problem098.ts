import type { Problem } from './types';

const problem: Problem = {
  id: 98,
  title: "引数の 2 倍を返す関数 double を作ってください",
  type: 'fill-in',
  codeWithMarker: `# n の 2 倍を返す関数 double を作ってください
# 例: double(3) → 6、double(0) → 0、double(-2) → -4

§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(double(3))
print(double(0))
print(double(-2))
`,
  correctOutput: "6\n0\n-4",
  requiredTokens: ['def', 'double', 'return', 'n'],
};

export default problem;
