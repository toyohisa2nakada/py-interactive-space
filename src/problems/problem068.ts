import type { Problem } from './types';

const problem: Problem = {
  id: 68,
  title: "偶数なら「偶数」、そうでなければ「奇数」と分岐するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `n = 4
if n % 2 == 0:
    print("偶数")
§§§§§:
    print("奇数")
`,
  correctOutput: "偶数",
  requiredTokens: ['else'],
};

export default problem;
