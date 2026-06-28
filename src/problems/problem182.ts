import type { Problem } from './types';

const problem: Problem = {
  id: 182,
  title: "if は、条件が一致したとき、 else は一致しなかったときに次の行が実行されます。出力を予想してください",
  type: 'predict-output',
  code: `score = 80
if score >= 60:
    print("合格")
else:
    print("不合格")
`,
  correctOutput: "合格",
};

export default problem;
