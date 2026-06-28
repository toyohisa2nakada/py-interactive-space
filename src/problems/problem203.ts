import type { Problem } from './types';

const problem: Problem = {
  id: 203,
  title: "文字列「42」を整数に変換した結果を予想してください",
  type: 'predict-output',
  code: `print(int("42"))
`,
  correctOutput: "42",
};

export default problem;
