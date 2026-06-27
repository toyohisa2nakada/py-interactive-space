import type { Problem } from './types';

const problem: Problem = {
  id: 160,
  title: "range(1,5) は [1,2,3,4] のリストを作成します。a += i は、aにiを足し合わせます。結果を予想してください",
  type: 'predict-output',
  code: `total = 0
for i in range(1, 5):
    total += i
print(total)
`,
  correctOutput: "10",
};

export default problem;
