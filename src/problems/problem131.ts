import type { Problem } from './types';

const problem: Problem = {
  id: 131,
  title: "sorted() の reverse=True は大きい順(降順)に並べ替えます。出力は [5,4,1] のように [ ] を付けてスペースを含めずに入力してください",
  type: 'predict-output',
  code: `nums = [3, 1, 4, 1, 5]
print(sorted(nums, reverse=True))
`,
  correctOutput: "[5,4,3,1,1]",
};

export default problem;
