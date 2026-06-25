import type { Problem } from './types';

const problem: Problem = {
  id: 112,
  title: "n in list は、n が list に含まれているか判定します。判定結果は、 True か False で返ります",
  type: 'predict-output',
  code: `print(3 in range(5))
`,
  correctOutput: "True",
};

export default problem;
