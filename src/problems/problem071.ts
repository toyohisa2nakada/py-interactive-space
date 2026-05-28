import type { Problem } from './types';

const problem: Problem = {
  id: 71,
  title: "forループの変数を埋めよ",
  type: 'fill-in',
  codeWithMarker: `fruits = ["apple", "banana", "cherry"]
for §§§§§ in fruits:
    print(fruit)
`,
  correctOutput: "apple\nbanana\ncherry",
};

export default problem;
