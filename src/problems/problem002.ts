import type { Problem } from './types';

const problem: Problem = {
  id: 2,
  title: "このプログラムの出力は？",
  type: 'predict-output',
  code: `a = 10
b = 3
print(a % b)
`,
  correctOutput: "1",
};

export default problem;
