import type { Problem } from './types';

const problem: Problem = {
  id: 149,
  title: "sumはリストの合計を返します",
  type: 'predict-output',
  code: `print(sum([0, 1, -1, 2, -2]))
`,
  correctOutput: "0",
};

export default problem;
