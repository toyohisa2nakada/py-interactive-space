import type { Problem } from './types';

const problem: Problem = {
  id: 111,
  title: "n in list は、n が list に含まれているか判定します。判定結果は、 True か False で返ります",
  type: 'predict-output',
  code: `print(3 in [1, 2, 5])
`,
  correctOutput: "False",
};

export default problem;
