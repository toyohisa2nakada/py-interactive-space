import type { Problem } from './types';

const problem: Problem = {
  id: 48,
  title: "a in list は、a が list に含まれているか判定します。出力は True または Falseとなります。結果を予想してください",
  type: 'predict-output',
  code: `s = "Hello, World!"
print("World" in s)
`,
  correctOutput: "True",
};

export default problem;
