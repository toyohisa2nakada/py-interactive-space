import type { Problem } from './types';

const problem: Problem = {
  id: 230,
  title: "10 から 1 までカウントダウンするプログラムを書いてください",
  type: 'fill-in',
  codeWithMarker: `for i in range(1,11):
    print(§§§§§§)
`,
  correctOutput: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1",
  requiredTokens: ['i'],
};

export default problem;
