import type { Problem } from './types';

const problem: Problem = {
  id: 249,
  title: "if、elif、elif、else の順に条件を確認します。出力を予想してください",
  type: 'predict-output',
  code: `x = 5
if x == 1:
    print("one")
elif x == 5:
    print("five")
elif x == 10:
    print("ten")
else:
    print("other")
`,
  correctOutput: "five",
};

export default problem;
