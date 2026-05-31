import type { Problem } from './types';

const problem: Problem = {
  id: 67,
  title: "x が負のとき「負の数です」と表示するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `x = -5
if x < 0:
    §§§§§§§§§§§§§§§§§§§§§§
else:
    print("0以上です")
`,
  correctOutput: "負の数です",
  requiredTokens: ['print'],
};

export default problem;
