import type { Problem } from './types';

const problem: Problem = {
  id: 132,
  title: "大きい順(降順)に並べ替えるために、reverse= の値を埋めてください",
  type: 'fill-in',
  codeWithMarker: `nums = [3, 1, 4, 1, 5]
print(sorted(nums, reverse=§§§§))
`,
  correctOutput: "[5, 4, 3, 1, 1]",
  requiredTokens: ['True'],
};

export default problem;
