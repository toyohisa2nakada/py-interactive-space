import type { Problem } from './types';

const problem: Problem = {
  id: 254,
  title: "range(1,4) は [1, 2, 3] を作成します。i=1 のとき、j は 1、2、3 となり、i=2 のときも 1、2、3、i=3 のときも 1、2、3 となります。そして、i == j のときだけ print() が実行されます。",
  type: 'predict-output',
  code: `for i in range(1, 4):
    for j in range(1, 4):
        if i == j:
            print(f"{i} {j}")
`,
  correctOutput: "1 1\n2 2\n3 3",
};

export default problem;
