import type { Problem } from './types';

const problem: Problem = {
  id: 196,
  title: "range(1,4)は1～3までのリストを作成します。total += i は totalの数値に i の数値を足し合わせます。結果を予想してください",
  type: 'predict-output',
  code: `total = 0
for i in range(1, 4):
    total += i
print(total)
`,
  correctOutput: "6",
};

export default problem;
