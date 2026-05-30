import type { Problem } from './types';

const problem: Problem = {
  id: 1,
  title: "出力は？",
  type: 'predict-output',
  code: `
print(3)
`,
  correctOutput: "3",
};

export default problem;
