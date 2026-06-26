import type { Problem } from './types';

const problem: Problem = {
  id: 156,
  title: "while ループで 1〜5 を表示します。出力を予想してください",
  type: 'predict-output',
  code: `i = 1
while i <= 5:
    print(i)
    i += 1
`,
  correctOutput: "1\n2\n3\n4\n5",
};

export default problem;
