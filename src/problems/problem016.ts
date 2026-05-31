import type { Problem } from './types';

const problem: Problem = {
  id: 16,
  title: "for ループで 1〜3 の合計を求めます。結果を予想してください",
  type: 'predict-output',
  code: `total = 0
for i in range(1, 4):
    total += i
print(total)
`,
  correctOutput: "6",
};

export default problem;
