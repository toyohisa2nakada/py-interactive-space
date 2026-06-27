import type { Problem } from './types';

const problem: Problem = {
  id: 9,
  title: "n ** p は、nのp乗を計算します。出力を予想してください",
  type: 'predict-output',
  code: `print(2 ** 10)
`,
  correctOutput: "1024",
};

export default problem;
