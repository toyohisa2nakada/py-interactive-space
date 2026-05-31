import type { Problem } from './types';

const problem: Problem = {
  id: 23,
  title: "0〜4 の中で偶数だけを表示します。出力を予想してください",
  type: 'predict-output',
  code: `for i in range(5):
    if i % 2 == 0:
        print(i)
`,
  correctOutput: "0\n2\n4",
};

export default problem;
