import type { Problem } from './types';

const problem: Problem = {
  id: 218,
  title: "出力が 奇数のみ (1, 3) になるように、if の条件を完成させてください",
  type: 'fill-in',
  codeWithMarker: `for n in [0, 1, 2, 3]:
    if §§§§§§§§§§:
        print(n)
`,
  correctOutput: "1\n3",
  requiredTokens: ['n', '%'],
};

export default problem;
