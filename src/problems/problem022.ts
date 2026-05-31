import type { Problem } from './types';

const problem: Problem = {
  id: 22,
  title: "score が 75 のとき、成績判定の結果を予想してください",
  type: 'predict-output',
  code: `score = 75
if score >= 80:
    print("A")
elif score >= 70:
    print("B")
else:
    print("C")
`,
  correctOutput: "B",
};

export default problem;
