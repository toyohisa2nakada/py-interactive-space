import type { Problem } from './types';

const problem: Problem = {
  id: 77,
  title: "名前と年齢を使った自己紹介文を作るプログラムを完成させてください",
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
