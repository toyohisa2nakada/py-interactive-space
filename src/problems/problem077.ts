import type { Problem } from './types';

const problem: Problem = {
  id: 77,
  title: "f文字列を埋めよ",
  type: 'fill-in',
  codeWithMarker: `name = "Alice"
age = 25
result = §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
print(result)
`,
  correctOutput: "Aliceは25歳です",
};

export default problem;
