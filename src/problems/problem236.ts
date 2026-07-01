import type { Problem } from './types';

const problem: Problem = {
  id: 236,
  title: "辞書型データ(person)から「age」の値を取り出した結果を予想してください",
  type: 'predict-output',
  code: `person = {"name": "Bob", "age": 30}
print(person["age"])
`,
  correctOutput: "30",
};

export default problem;
