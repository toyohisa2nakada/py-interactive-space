import type { Problem } from './types';

const problem: Problem = {
  id: 189,
  title: "1から3までの数字を足し合わせた合計を求める while ループを完成させてください。 <= という記号を使います",
  type: 'fill-in',
  codeWithMarker: `total = 0
i = 1
while §§§§§§§§§§:
    total += i
    i += 1
print(total)
`,
  correctOutput: "6",
  requiredTokens: ['i'],
};

export default problem;
