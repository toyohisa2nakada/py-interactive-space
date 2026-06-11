import type { Problem } from './types';

const problem: Problem = {
  id: 103,
  title: "リストの要素を順に表示します。出力を予想してください",
  type: 'predict-output',
  code: `fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
`,
  correctOutput: "apple\nbanana\ncherry",
};

export default problem;
