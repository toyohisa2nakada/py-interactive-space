import type { Problem } from './types';

const problem: Problem = {
  id: 69,
  title: "1 から 5 の合計を求めるプログラムを完成させてください。range(1, 6)は1～5までの数字を表します",
  type: 'fill-in',
  codeWithMarker: `total = 0
for i in range(1, 6):
    §§§§§§§§§§§
print(total)
`,
  correctOutput: "15",
  requiredTokens: ['total', 'i'],
};

export default problem;
