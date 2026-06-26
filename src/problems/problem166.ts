import type { Problem } from './types';

const problem: Problem = {
  id: 166,
  title: "i は、1～3の値を取ります。出力を予想してください",
  type: 'predict-output',
  code: `for i in range(1, 4):
    print(i * 10)
`,
  correctOutput: "10\n20\n30",
};

export default problem;
