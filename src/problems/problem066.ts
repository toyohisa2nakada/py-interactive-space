import type { Problem } from './types';

const problem: Problem = {
  id: 66,
  title: "if文の条件を埋めよ①: 正の数",
  type: 'fill-in',
  codeWithMarker: `x = 7
if §§§§§§§:
    print("正の数")
else:
    print("0以下")
`,
  correctOutput: "正の数",
};

export default problem;
