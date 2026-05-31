import type { Problem } from './types';

const problem: Problem = {
  id: 48,
  title: "文字列に「World」が含まれているか確認します。結果を予想してください",
  type: 'predict-output',
  code: `s = "Hello, World!"
print("World" in s)
`,
  correctOutput: "True",
};

export default problem;
