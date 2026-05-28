import type { Problem } from './types';

const problem: Problem = {
  id: 51,
  title: "変数代入①: x に 10 を代入せよ",
  type: 'fill-in',
  codeWithMarker: `# 変数 x に 10 を代入して出力せよ
x = §§
print(x)
`,
  correctOutput: "10",
};

export default problem;
