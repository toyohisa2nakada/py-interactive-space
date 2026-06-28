import type { Problem } from './types';

const problem: Problem = {
  id: 221,
  title: "not は、条件を反転させます。出力を予想してください",
  type: 'predict-output',
  code: `n = -3
if not n > 0:
    print("正ではない")
else:
    print("正")
`,
  correctOutput: "正ではない",
};

export default problem;
