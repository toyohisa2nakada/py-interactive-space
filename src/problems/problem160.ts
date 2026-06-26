import type { Problem } from './types';

const problem: Problem = {
  id: 160,
  title: "for ループで 1〜4 の合計を求めます。結果を予想してください",
  type: 'predict-output',
  code: `total = 0
for i in range(1, 5):
    total += i
print(total)
`,
  correctOutput: "10",
};

export default problem;
