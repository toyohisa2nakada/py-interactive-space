import type { Problem } from './types';

const problem: Problem = {
  id: 107,
  title: "成績判定の結果を予想してください",
  type: 'predict-output',
  code: `score = 59
if score >= 90:
    print("S")
elif score >= 80:
    print("A")
elif score >= 70:
    print("B")
elif score >= 60:
    print("C")
else:
    print("D")
`,
  correctOutput: "D",
};

export default problem;
