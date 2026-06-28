import type { Problem } from './types';

const problem: Problem = {
  id: 197,
  title: "文字列「hello」を大文字に変換した結果を予想してください",
  type: 'predict-output',
  code: `s = "hello"
print(s.upper())
`,
  correctOutput: "HELLO",
};

export default problem;
