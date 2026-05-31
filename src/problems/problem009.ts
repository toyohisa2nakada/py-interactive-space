import type { Problem } from './types';

const problem: Problem = {
  id: 9,
  title: "2 の 10 乗の結果を予想してください",
  type: 'predict-output',
  code: `print(2 ** 10)
`,
  correctOutput: "1024",
};

export default problem;
