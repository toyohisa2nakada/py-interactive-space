import type { Problem } from './types';

const problem: Problem = {
  id: 31,
  title: "range のステップ: 偶数",
  type: 'predict-output',
  code: `for i in range(2, 10, 2):
    print(i)
`,
  correctOutput: "2\n4\n6\n8",
};

export default problem;
