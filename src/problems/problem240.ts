import type { Problem } from './types';

const problem: Problem = {
  id: 240,
  title: "上書きする前と後で、値がどう変わるか出力を予想してください",
  type: 'predict-output',
  code: `person = {"name": "Bob", "age": 30}
print(person["age"])
person["age"] = 35
print(person["age"])
`,
  correctOutput: "30\n35",
};

export default problem;
