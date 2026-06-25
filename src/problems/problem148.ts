import type { Problem } from './types';

const problem: Problem = {
  id: 148,
  title: "if は、条件が一致したとき、 else は一致しなかったときに次の行が実行されます。出力を予想してください",
  type: 'predict-output',
  code: `x = 5
if x >= 5:
    print("5以上")
else:
    print("5未満")
`,
  correctOutput: "5以上",
};

export default problem;
