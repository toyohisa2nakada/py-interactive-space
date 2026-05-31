import type { Problem } from './types';

const problem: Problem = {
  id: 13,
  title: "x が正の数のとき、if 文が何を表示するか予想してください",
  type: 'predict-output',
  code: `x = 5
if x > 0:
    print("正")
else:
    print("負")
`,
  correctOutput: "正",
};

export default problem;
