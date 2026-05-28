import type { Problem } from './types';

const problem: Problem = {
  id: 74,
  title: "ループ本体を埋めよ: 二乗を蓄積",
  type: 'fill-in',
  codeWithMarker: `total = 0
for i in range(1, 4):
    §§§§§§§§§§§§§§
print(total)
`,
  correctOutput: "14",
};

export default problem;
