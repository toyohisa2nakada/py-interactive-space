import type { Problem } from './types';

const problem: Problem = {
  id: 48,
  title: "in演算子: 文字列検索",
  type: 'predict-output',
  code: `s = "Hello, World!"
print("World" in s)
`,
  correctOutput: "True",
};

export default problem;
