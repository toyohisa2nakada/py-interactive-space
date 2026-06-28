import type { Problem } from './types';

const problem: Problem = {
  id: 201,
  title: "sumはリストの合計を返します",
  type: 'predict-output',
  code: `print(sum([1, 2, 3, 4, 5]))
`,
  correctOutput: "15",
};

export default problem;
