import type { Problem } from './types';

const problem: Problem = {
  id: 239,
  title: "辞書の既存のキー(age)の値を上書きした結果を予想してください",
  type: 'predict-output',
  code: `person = {"name": "Bob", "age": 30}
person["age"] = 35
print(person["age"])
`,
  correctOutput: "35",
};

export default problem;
