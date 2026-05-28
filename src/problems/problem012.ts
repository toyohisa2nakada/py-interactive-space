import type { Problem } from './types';

const problem: Problem = {
  id: 12,
  title: "文字列の結合",
  type: 'predict-output',
  code: `print("Hello" + ", " + "World!")
`,
  correctOutput: "Hello, World!",
};

export default problem;
