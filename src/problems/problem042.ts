import type { Problem } from './types';

const problem: Problem = {
  id: 42,
  title: "辞書から「name」の値を取り出した結果を予想してください",
  type: 'predict-output',
  code: `person = {"name": "Alice", "age": 20}
print(person["name"])
`,
  correctOutput: "Alice",
};

export default problem;
