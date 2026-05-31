import type { Problem } from './types';

const problem: Problem = {
  id: 19,
  title: "while ループで 1〜3 を表示します。出力を予想してください",
  type: 'predict-output',
  code: `i = 1
while i <= 3:
    print(i)
    i += 1
`,
  correctOutput: "1\n2\n3",
};

export default problem;
