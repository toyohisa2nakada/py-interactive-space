import type { Problem } from './types';

const problem: Problem = {
  id: 238,
  title: "辞書に新しいキー(city)を追加して値をセットした結果を予想してください",
  type: 'predict-output',
  code: `person = {"name": "Bob", "age": 30}
person["city"] = "Osaka"
print(person["city"])
`,
  correctOutput: "Osaka",
};

export default problem;
