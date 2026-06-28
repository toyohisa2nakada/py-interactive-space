import type { Problem } from './types';

const problem: Problem = {
  id: 95,
  title: "5 から 1 までカウントダウンするプログラムを書いてください",
  type: 'fill-in',
  codeWithMarker: `for i in range(1,6):
    print(§§§§§§)
`,
  correctOutput: "5\n4\n3\n2\n1",
  requiredTokens: ['i'],
};

export default problem;
