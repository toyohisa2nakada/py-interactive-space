import type { Problem } from './types';

const problem: Problem = {
  id: 15,
  title: "forループ: range(3)の出力",
  type: 'predict-output',
  code: `for i in range(3):
    print(i)
`,
  correctOutput: "0\n1\n2",
};

export default problem;
