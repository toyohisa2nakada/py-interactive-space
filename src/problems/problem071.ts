import type { Problem } from './types';

const problem: Problem = {
  id: 71,
  title: "fruits リストの要素を順に表示するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `fruits = ["apple", "banana", "cherry"]
for §§§§§ in fruits:
    print(fruit)
`,
  correctOutput: "apple\nbanana\ncherry",
  requiredTokens: ['fruit'],
};

export default problem;
