import type { Problem } from './types';

const problem: Problem = {
  id: 102,
  title: "リストの最初の要素を予想してください",
  type: 'predict-output',
  code: `fruits = ["apple", "banana", "cherry"]
print(fruits[0])
`,
  correctOutput: "apple",
};

export default problem;
