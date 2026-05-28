import type { Problem } from './types';

const problem: Problem = {
  id: 70,
  title: "while条件を埋めよ: 1〜5を出力",
  type: 'fill-in',
  codeWithMarker: `i = 1
while §§§§§§:
    print(i)
    i += 1
`,
  correctOutput: "1\n2\n3\n4\n5",
};

export default problem;
