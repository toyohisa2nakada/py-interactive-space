import type { Problem } from './types';

const problem: Problem = {
  id: 13,
  title: "if文: 正の数",
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
