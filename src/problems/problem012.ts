import type { Problem } from './types';

const problem: Problem = {
  id: 12,
  title: "3 つの文字列をつなげた結果を予想してください",
  type: 'predict-output',
  code: `print("Hello" + ", " + "World!")
`,
  correctOutput: "Hello, World!",
};

export default problem;
