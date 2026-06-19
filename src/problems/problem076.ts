import type { Problem } from './types';

const problem: Problem = {
  id: 76,
  title: "2 から 6 のリストを作ってください",
  type: 'fill-in',
  codeWithMarker: `squares = [§§§§§§ for x in range(1, 6)]
print(squares)
`,
  correctOutput: "[2, 3, 4, 5, 6]",
  requiredTokens: ['x'],
};

export default problem;
