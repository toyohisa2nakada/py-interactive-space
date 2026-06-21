import type { Problem } from './types';

const problem: Problem = {
  id: 142,
  title: "辞書の既存のキー(age)の値を上書きした結果を予想してください",
  type: 'predict-output',
  code: `person = {"name": "Alice", "age": 20}
person["age"] = 25
print(person["age"])
`,
  correctOutput: "25",
};

export default problem;
