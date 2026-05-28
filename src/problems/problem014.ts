import type { Problem } from './types';

const problem: Problem = {
  id: 14,
  title: "if文: 負の数",
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
