import type { Problem } from './types';

const problem: Problem = {
  id: 69,
  title: "ループ本体を埋めよ: 合計",
  type: 'fill-in',
  codeWithMarker: `total = 0
for i in range(1, 6):
    §§§§§§§§§§§
print(total)
`,
  correctOutput: "15",
};

export default problem;
