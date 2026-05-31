import type { Problem } from './types';

const problem: Problem = {
  id: 76,
  title: "1 から 5 の二乗を並べたリストを作るプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `# 1 から 5 の 2 乗のリストを作ってください
squares = [§§§§§§ for x in range(1, 6)]
print(squares)
`,
  correctOutput: "[1, 4, 9, 16, 25]",
  requiredTokens: ['x'],
};

export default problem;
