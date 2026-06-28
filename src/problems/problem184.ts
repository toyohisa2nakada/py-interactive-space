import type { Problem } from './types';

const problem: Problem = {
  id: 184,
  title: "if、elif、elif、else の順に条件を確認します。出力を予想してください",
  type: 'predict-output',
  code: `x = 10
if x == 1:
    print("one")
elif x == 5:
    print("five")
elif x == 10:
    print("ten")
else:
    print("other")
`,
  correctOutput: "ten",
};

export default problem;
