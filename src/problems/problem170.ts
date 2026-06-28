import type { Problem } from './types';

const problem: Problem = {
  id: 170,
  title: "range(1,3) は [1, 2] を作成します。i=1 のとき、j は 1、2 となり i=2 のときももう一度 j は 1、2 となります。f\"{i} {j}\"は変数iと変数jの値を使って文字列を作ります。出力を予想してください",
  type: 'predict-output',
  code: `for i in range(1, 3):
    for j in range(1, 3):
        print(f"{i} {j}")
`,
  correctOutput: "1 1\n1 2\n2 1\n2 2",
};

export default problem;
