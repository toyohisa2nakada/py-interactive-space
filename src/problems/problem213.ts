import type { Problem } from './types';

const problem: Problem = {
  id: 213,
  title: "リストの最大値を求めて表示するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `nums = [3, 1, 4, 1, 5, 9]
# リストの最大値を求めて表示してください
result = §§§§§§§§§
print(result)
`,
  correctOutput: "9",
  requiredTokens: ['max', 'nums'],
};

export default problem;
