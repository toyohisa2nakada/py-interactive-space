import type { Problem } from './types';

const problem: Problem = {
  id: 220,
  title: "or は、どちらか一方でも条件が一致すれば True になります。出力を予想してください",
  type: 'predict-output',
  code: `n = 5
if n % 2 == 0 or n > 0:
    print("偶数または正")
else:
    print("奇数かつ負")
`,
  correctOutput: "偶数または正",
};

export default problem;
