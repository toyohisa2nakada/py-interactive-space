import type { Problem } from './types';

const problem: Problem = {
  id: 170,
  title: "ネストしたループで表示される数を予想してください",
  type: 'predict-output',
  code: `for i in range(1, 3):
    for j in range(1, 3):
        if i != j:
            print(i * j)
`,
  correctOutput: "2\n2",
};

export default problem;
