import type { Problem } from './types';

const problem: Problem = {
  id: 77,
  title: "「Aliceは25歳です」と出力するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `name = "Alice"
age = 25
result = §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
print(result)
`,
  correctOutput: "Aliceは25歳です",
  requiredTokens: ['name', 'age'],
};

export default problem;
