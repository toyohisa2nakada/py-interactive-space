import type { Problem } from './types';

const problem: Problem = {
  id: 70,
  title: "1 から 5 まで順に表示する while ループを完成させてください。 <= という記号を使います",
  type: 'fill-in',
  codeWithMarker: `i = 1
while §§§§§§:
    print(i)
    i += 1
`,
  correctOutput: "1\n2\n3\n4\n5",
  requiredTokens: ['i'],
};

export default problem;
