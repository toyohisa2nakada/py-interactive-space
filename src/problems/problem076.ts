import type { Problem } from './types';

const problem: Problem = {
  id: 76,
  title: "リスト内包表記を埋めよ: 二乗リスト",
  type: 'fill-in',
  codeWithMarker: `# 1 から 5 の 2 乗のリストを作れ
squares = [§§§§§§ for x in range(1, 6)]
print(squares)
`,
  correctOutput: "[1, 4, 9, 16, 25]",
};

export default problem;
