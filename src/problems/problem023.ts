import type { Problem } from './types';

const problem: Problem = {
  id: 23,
  title: "forループ + if: 偶数のみ出力",
  type: 'predict-output',
  code: `for i in range(5):
    if i % 2 == 0:
        print(i)
`,
  correctOutput: "0\n2\n4",
};

export default problem;
