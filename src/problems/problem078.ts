import type { Problem } from './types';

const problem: Problem = {
  id: 78,
  title: "合計が 10 を超えるまで足し続けるプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `total = 0
i = 1
while §§§§§§§§§§:
    total += i
    i += 1
print(total)
`,
  correctOutput: "15",
  requiredTokens: ['total'],
};

export default problem;
