import type { Problem } from './types';

const problem: Problem = {
  id: 155,
  title: "for ループで合計を求めます。結果を予想してください",
  type: 'predict-output',
  code: `total = 0
for i in range(1, 4):
    total += i + 1
print(total)
`,
  correctOutput: "9",
};

export default problem;
