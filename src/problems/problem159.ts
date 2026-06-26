import type { Problem } from './types';

const problem: Problem = {
  id: 159,
  title: "range(n)は、0からn-1までの数字を発生させます。出力を予想してください",
  type: 'predict-output',
  code: `for i in range(4):
    print(i)
`,
  correctOutput: "0\n1\n2\n3",
};

export default problem;
