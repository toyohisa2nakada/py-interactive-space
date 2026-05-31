import type { Problem } from './types';

const problem: Problem = {
  id: 66,
  title: "x が正の数のとき「正の数」と表示するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `x = 7
if §§§§§§§:
    print("正の数")
else:
    print("0以下")
`,
  correctOutput: "正の数",
  requiredTokens: ['x'],
};

export default problem;
