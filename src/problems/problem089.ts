import type { Problem } from './types';

const problem: Problem = {
  id: 89,
  title: "リストの合計を求める関数を作成してください",
  type: 'fill-in',
  codeWithMarker: `def sum_list(nums):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(sum_list([1, 2, 3]))
print(sum_list([10, 20, 30]))
print(sum_list([]))
`,
  correctOutput: "6\n60\n0",
  requiredTokens: ['return', 'nums'],
};

export default problem;
