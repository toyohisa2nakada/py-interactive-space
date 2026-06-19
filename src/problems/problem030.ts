import type { Problem } from './types';

const problem: Problem = {
  id: 30,
  title: "i は、1～3の値を取ります。出力を予想してください",
  type: 'predict-output',
  code: `for i in range(1, 4):
    print(i * i)
`,
  correctOutput: "1\n4\n9",
};

export default problem;
