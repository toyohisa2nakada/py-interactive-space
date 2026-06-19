import type { Problem } from './types';

const problem: Problem = {
  id: 122,
  title: "f 文字列を使って、「5 * 2 = 10」と表示するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `a = 5
b = 2
print(§§§§§§§§§§§§§§§§§§§§§§§§)
`,
  correctOutput: "5 * 2 = 10",
  requiredTokens: ['f"', 'a', 'b'],
};

export default problem;
