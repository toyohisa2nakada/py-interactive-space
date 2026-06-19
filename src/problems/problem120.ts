import type { Problem } from './types';

const problem: Problem = {
  id: 120,
  title: "f 文字列の中で計算した結果を予想してください。スペースの有無に注意してみてください",
  type: 'predict-output',
  code: `a = 3
b = 4
print(f"{a} + {b} = {a + b}")
`,
  correctOutput: "3 + 4 = 7",
};

export default problem;
