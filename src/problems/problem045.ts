import type { Problem } from './types';

const problem: Problem = {
  id: 45,
  title: "range の合計: 1〜10",
  type: 'predict-output',
  code: `print(sum(range(1, 11)))
`,
  correctOutput: "55",
};

export default problem;
