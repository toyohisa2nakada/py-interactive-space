import type { Problem } from './types';

const problem: Problem = {
  id: 45,
  title: "1 から 10 までの合計を予想してください",
  type: 'predict-output',
  code: `print(sum(range(1, 11)))
`,
  correctOutput: "55",
};

export default problem;
