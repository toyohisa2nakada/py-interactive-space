import type { Problem } from './types';

const problem: Problem = {
  id: 15,
  title: "range(n)は、0からn-1までの数字を発生させます。出力を予想してください",
  type: 'predict-output',
  code: `for i in range(3):
    print(i)
`,
  correctOutput: "0\n1\n2",
};

export default problem;
