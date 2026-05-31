import type { Problem } from './types';

const problem: Problem = {
  id: 31,
  title: "2〜8 を 2 ずつ増やして表示します。出力を予想してください",
  type: 'predict-output',
  code: `for i in range(2, 10, 2):
    print(i)
`,
  correctOutput: "2\n4\n6\n8",
};

export default problem;
