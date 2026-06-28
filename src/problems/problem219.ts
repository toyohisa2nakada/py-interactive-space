import type { Problem } from './types';

const problem: Problem = {
  id: 219,
  title: "and は、両方の条件が一致したときだけ True になります。出力を予想してください",
  type: 'predict-output',
  code: `n = 4
if n % 2 == 0 and n > 0:
    print("偶数かつ正")
else:
    print("奇数または負")
`,
  correctOutput: "偶数かつ正",
};

export default problem;
