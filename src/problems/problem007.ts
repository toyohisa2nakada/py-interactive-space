import type { Problem } from './types';

const problem: Problem = {
  id: 7,
  title: "かけ算の結果",
  type: 'predict-output',
  code: `a = 6
b = 7
print(a * b)
`,
  correctOutput: "42",
};

export default problem;
