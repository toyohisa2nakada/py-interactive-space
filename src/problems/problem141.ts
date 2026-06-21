import type { Problem } from './types';

const problem: Problem = {
  id: 141,
  title: "辞書に新しいキー(city)を追加して値をセットした結果を予想してください",
  type: 'predict-output',
  code: `person = {"name": "Alice", "age": 20}
person["city"] = "Tokyo"
print(person["city"])
`,
  correctOutput: "Tokyo",
};

export default problem;
