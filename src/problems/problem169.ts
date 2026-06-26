import type { Problem } from './types';

const problem: Problem = {
  id: 169,
  title: "2 から 4 の二乗の合計を求めるプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `total = 0
for i in range(1, 4):
    §§§§§§§§§§§§§§
print(total)
`,
  correctOutput: "29",
  requiredTokens: ['total', 'i'],
};

export default problem;
