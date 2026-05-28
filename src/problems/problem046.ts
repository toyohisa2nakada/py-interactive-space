import type { Problem } from './types';

const problem: Problem = {
  id: 46,
  title: "ネストしたfor + if",
  type: 'predict-output',
  code: `for i in range(1, 3):
    for j in range(1, 3):
        if i == j:
            print(i * j)
`,
  correctOutput: "1\n4",
};

export default problem;
