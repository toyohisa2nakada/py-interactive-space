import type { Problem } from './types';

const problem: Problem = {
  id: 16,
  title: "forループ: 合計",
  type: 'predict-output',
  code: `total = 0
for i in range(1, 4):
    total += i
print(total)
`,
  correctOutput: "6",
};

export default problem;
