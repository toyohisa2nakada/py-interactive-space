import type { Problem } from './types';

const problem: Problem = {
  id: 146,
  title: "items() を使って辞書のキーと値を順に取り出します。出力を予想してください",
  type: 'predict-output',
  code: `person = {"name": "Alice", "age": 20}
for key, value in person.items():
    print(key)
    print(value)
`,
  correctOutput: "name\nAlice\nage\n20",
};

export default problem;
