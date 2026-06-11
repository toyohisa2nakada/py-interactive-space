import type { Problem } from './types';

const problem: Problem = {
  id: 105,
  title: "for ループで 0〜3 を表示します。出力を予想してください",
  type: 'predict-output',
  code: `for i in range(4):
    print(i)
`,
  correctOutput: "0\n1\n2\n3",
};

export default problem;
