import type { Problem } from './types';

const problem: Problem = {
  id: 175,
  title: "range(1,3) は [1, 2] を作成します。i=1 のとき j は 1、2 となり、i=2 のときももう一度 j は 1、2 となります。出力を予想してください",
  type: 'predict-output',
  code: `for i in range(1, 3):
    for j in range(1, 3):
        print(i)
`,
  correctOutput: "1\n1\n2\n2",
};

export default problem;
