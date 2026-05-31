import type { Problem } from './types';

const problem: Problem = {
  id: 14,
  title: "x が負の数のとき、if 文が何を表示するか予想してください",
  type: 'predict-output',
  code: `x = -3
if x > 0:
    print("正")
else:
    print("負")
`,
  correctOutput: "負",
};

export default problem;
