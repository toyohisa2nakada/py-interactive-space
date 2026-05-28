import type { Problem } from './types';

const problem: Problem = {
  id: 67,
  title: "if文の本体を埋めよ: 負の数",
  type: 'fill-in',
  codeWithMarker: `x = -5
if x < 0:
    §§§§§§§§§§§§§§§§§§§§§§
else:
    print("0以上です")
`,
  correctOutput: "負の数です",
};

export default problem;
