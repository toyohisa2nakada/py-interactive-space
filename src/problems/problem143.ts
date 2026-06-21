import type { Problem } from './types';

const problem: Problem = {
  id: 143,
  title: "上書きする前と後で、値がどう変わるか出力を予想してください",
  type: 'predict-output',
  code: `person = {"name": "Alice", "age": 20}
print(person["age"])
person["age"] = 25
print(person["age"])
`,
  correctOutput: "20\n25",
};

export default problem;
