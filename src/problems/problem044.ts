import type { Problem } from './types';

const problem: Problem = {
  id: 44,
  title: "absは絶対値を出力します。以下の出力を予想してください",
  type: 'predict-output',
  code: `print(abs(-7))
`,
  correctOutput: "7",
};

export default problem;
