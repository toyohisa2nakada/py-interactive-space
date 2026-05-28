import type { Problem } from './types';

const problem: Problem = {
  id: 39,
  title: "enumerate の出力",
  type: 'predict-output',
  code: `fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits):
    print(i, fruit)
`,
  correctOutput: "0 apple\n1 banana\n2 cherry",
};

export default problem;
