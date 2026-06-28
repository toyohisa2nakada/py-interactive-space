import type { Problem } from './types';

const problem: Problem = {
  id: 193,
  title: "if は、条件が一致したとき、 else は一致しなかったときに次の行が実行されます。出力を予想してください",
  type: 'predict-output',
  code: `x = 5
if x > 0:
    print("正")
else:
    print("負")
`,
  correctOutput: "正",
};

export default problem;
