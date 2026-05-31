import type { Problem } from './types';

const problem: Problem = {
  id: 30,
  title: "1〜3 の二乗を順に表示します。出力を予想してください",
  type: 'predict-output',
  code: `for i in range(1, 4):
    print(i * i)
`,
  correctOutput: "1\n4\n9",
};

export default problem;
