import type { Problem } from './types';

const problem: Problem = {
  id: 235,
  title: "辞書型データ(person)から「name」の値を取り出した結果を予想してください",
  type: 'predict-output',
  code: `person = {"name": "Bob", "age": 30}
print(person["name"])
`,
  correctOutput: "Bob",
};

export default problem;
