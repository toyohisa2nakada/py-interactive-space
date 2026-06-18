import type { Problem } from './types';

const problem: Problem = {
  id: 112,
  title: "in を使うと range の中に含まれているかも判定できます",
  type: 'predict-output',
  code: `print(3 in range(5))
`,
  correctOutput: "True",
};

export default problem;
