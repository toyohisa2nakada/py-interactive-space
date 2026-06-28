import type { Problem } from './types';

const problem: Problem = {
  id: 207,
  title: "range(1,3) は [1, 2] を作成します。i=1 のとき、j は 1、2 となり i=2 のときももう一度 j は 1、2 となります。そして、i == j のときだけ print() が実行されます。",
  type: 'predict-output',
  code: `for i in range(1, 3):
    for j in range(1, 3):
        if i == j:
            print(f"{i} {j}")
`,
  correctOutput: "1 1\n2 2",
};

export default problem;
