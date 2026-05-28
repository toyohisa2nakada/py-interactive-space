import type { Problem } from './types';

const problem: Problem = {
  id: 98,
  title: "関数を作れ①: double（多テスト）",
  type: 'fill-in',
  codeWithMarker: `# 関数 double を作れ（n の 2 倍を返す）
# テスト: double(3)→6, double(0)→0, double(-2)→-4

§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(double(3))
print(double(0))
print(double(-2))
`,
  correctOutput: "6\n0\n-4",
};

export default problem;
