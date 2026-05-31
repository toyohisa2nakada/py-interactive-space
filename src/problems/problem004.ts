import type { Problem } from './types';

const problem: Problem = {
  id: 4,
  title: "変数 name に代入された文字列を予想してください",
  type: 'predict-output',
  code: `name = "Python"
print(name)
`,
  correctOutput: "Python",
};

export default problem;
