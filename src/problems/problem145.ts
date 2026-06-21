import type { Problem } from './types';

const problem: Problem = {
  id: 145,
  title: "del で辞書からキー(age)を削除した後、in でキーが残っているか確認した結果を予想してください。出力には True か False を入力してください",
  type: 'predict-output',
  code: `person = {"name": "Alice", "age": 20}
del person["age"]
print("age" in person)
`,
  correctOutput: "False",
};

export default problem;
