import type { Problem } from './types';

const problem: Problem = {
  id: 15,
  title: "for ループで 0〜2 を表示します。出力を予想してください",
  type: 'predict-output',
  code: `for i in range(3):
    print(i)
`,
  correctOutput: "0\n1\n2",
};

export default problem;
