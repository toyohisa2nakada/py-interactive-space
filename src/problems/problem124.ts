import type { Problem } from './types';

const problem: Problem = {
  id: 124,
  title: "s が 60 以上なら「単位取得」、そうでなければ「落単」を返す関数 judge です。出力を予想してください",
  type: 'predict-output',
  code: `def judge(s):
    if s >= 60:
        return "単位取得"
    else:
        return "落単"

print(judge(59))
print(judge(60))
print(judge(100))
`,
  correctOutput: "落単\n単位取得\n単位取得",
};

export default problem;
