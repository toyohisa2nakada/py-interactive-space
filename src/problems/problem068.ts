import type { Problem } from './types';

const problem: Problem = {
  id: 68,
  title: "else を埋めよ",
  type: 'fill-in',
  codeWithMarker: `n = 4
if n % 2 == 0:
    print("偶数")
§§§§§:
    print("奇数")
`,
  correctOutput: "偶数",
};

export default problem;
