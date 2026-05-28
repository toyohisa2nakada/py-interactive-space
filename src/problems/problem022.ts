import type { Problem } from './types';

const problem: Problem = {
  id: 22,
  title: "if/elif/else: 成績判定",
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
