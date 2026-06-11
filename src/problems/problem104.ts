import type { Problem } from './types';

const problem: Problem = {
  id: 104,
  title: "リストの最初の要素を表示するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `fruits = ["apple", "banana", "cherry"]
print(fruits[§§])
`,
  correctOutput: "apple",
  requiredTokens: ['0'],
};

export default problem;
