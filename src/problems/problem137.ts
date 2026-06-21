import type { Problem } from './types';

const problem: Problem = {
  id: 137,
  title: "1, 3, 5, 7 と表示するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `for i in range(1, §§§, 2):
    print(i)
`,
  correctOutput: "1\n3\n5\n7",
  requiredTokens: [],
};

export default problem;
