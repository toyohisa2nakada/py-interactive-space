import type { Problem } from './types';

const problem: Problem = {
  id: 139,
  title: "辞書型データ(person)から「age」の値を取り出した結果を予想してください",
  type: 'predict-output',
  code: `person = {"name": "Alice", "age": 20}
print(person["age"])
`,
  correctOutput: "20",
};

export default problem;
