import type { Problem } from './types';

const problem: Problem = {
  id: 2,
  title: "出力は？",
  type: 'predict-output',
  code: `
print("a")
`,
  correctOutput: "a",
};

export default problem;
