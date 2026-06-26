import type { Problem } from './types';

const problem: Problem = {
  id: 162,
  title: "while ループで 2〜3 を表示します。出力を予想してください",
  type: 'predict-output',
  code: `i = 2
while i <= 3:
    print(i)
    i += 1
`,
  correctOutput: "2\n3",
};

export default problem;
