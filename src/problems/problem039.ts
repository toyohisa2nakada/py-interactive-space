import type { Problem } from './types';

const problem: Problem = {
  id: 39,
  title: "enumerate でインデックス(0から始まる要素の番号)と要素を表示します。出力を予想してください",
  type: 'predict-output',
  code: `fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits):
    print(f"{i} {fruit}")
`,
  correctOutput: "0 apple\n1 banana\n2 cherry",
};

export default problem;
