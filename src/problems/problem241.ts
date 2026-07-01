import type { Problem } from './types';

const problem: Problem = {
  id: 241,
  title: "in を使って、辞書にキー(age)が存在するか確認した結果を予想してください。出力には True か False を入力してください",
  type: 'predict-output',
  code: `person = {"name": "Bob", "age": 30}
print("age" in person)
`,
  correctOutput: "True",
};

export default problem;
