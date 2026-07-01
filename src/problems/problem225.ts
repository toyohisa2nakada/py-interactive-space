import type { Problem } from './types';

const problem: Problem = {
  id: 225,
  title: "range(2,4) は [2, 3] を作成します。i=2 のとき、j は 2、3 となり i=3 のときももう一度 j は 2、3 となります。f\"{i} {j}\"は変数iと変数jの値を使って文字列を作ります。出力を予想してください",
  type: 'predict-output',
  code: `for i in range(2, 4):
    for j in range(2, 4):
        print(f"{i} {j}")
`,
  correctOutput: "2 2\n2 3\n3 2\n3 3",
};

export default problem;
