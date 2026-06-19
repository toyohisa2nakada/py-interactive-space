import type { Problem } from './types';

const problem: Problem = {
  id: 121,
  title: "f 文字列を使って、「Bobは175cmです」と表示するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `name = "Bob"
height = 175
print(§§§§§§§§§§§§§§§§§§§§§§§§)
`,
  correctOutput: "Bobは175cmです",
  requiredTokens: ['f"', 'name', 'height'],
};

export default problem;
