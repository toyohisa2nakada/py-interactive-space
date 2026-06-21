import type { Problem } from './types';

const problem: Problem = {
  id: 136,
  title: "1, 4, 7 と表示するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `for i in range(1, 10, §§§):
    print(i)
`,
  correctOutput: "1\n4\n7",
  requiredTokens: ['3'],
};

export default problem;
