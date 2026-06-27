import type { Problem } from './types';

const problem: Problem = {
  id: 176,
  title: "range(1,3) は [1, 2] を作成します。i=1 のとき j は 1、2 となり、i=2 のときももう一度 j は 1、2 となります。f\"{i} {j}\" は、i と j の値を空白区切りで文字列として表示します。出力を予想してください",
  type: 'predict-output',
  code: `for i in range(1, 3):
    for j in range(1, 3):
        print(f"{i} {j}")
`,
  correctOutput: "1 1\n1 2\n2 1\n2 2",
};

export default problem;
