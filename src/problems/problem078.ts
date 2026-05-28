import type { Problem } from './types';

const problem: Problem = {
  id: 78,
  title: "while条件を埋めよ: 合計が閾値を超えるまで",
  type: 'fill-in',
  codeWithMarker: `total = 0
i = 1
while §§§§§§§§§§:
    total += i
    i += 1
print(total)
`,
  correctOutput: "15",
};

export default problem;
