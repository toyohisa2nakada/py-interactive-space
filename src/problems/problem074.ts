import type { Problem } from './types';

const problem: Problem = {
  id: 74,
  title: "1 から 3 の二乗の合計を求めるプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `total = 0
for i in range(1, 4):
    §§§§§§§§§§§§§§
print(total)
`,
  correctOutput: "14",
  requiredTokens: ['total', 'i'],
};

export default problem;
