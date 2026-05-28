import type { Problem } from './types';

const problem: Problem = {
  id: 30,
  title: "forループ: 二乗を出力",
  type: 'predict-output',
  code: `for i in range(1, 4):
    print(i * i)
`,
  correctOutput: "1\n4\n9",
};

export default problem;
