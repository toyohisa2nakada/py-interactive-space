import type { Problem } from './types';

const problem: Problem = {
  id: 91,
  title: "1 から 5 まで順に表示するプログラムを書いてください",
  type: 'fill-in',
  codeWithMarker: `# 改行もできます。最初の行は左端から書き始め、for の中で繰り返す処理は字下げして書きます。
§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
`,
  correctOutput: "1\n2\n3\n4\n5",
  requiredTokens: ['print'],
};

export default problem;
