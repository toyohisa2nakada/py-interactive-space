import type { Problem } from './types';

const problem: Problem = {
  id: 243,
  title: "items() を使って辞書のキーと値を順に取り出します。出力を予想してください",
  type: 'predict-output',
  code: `person = {"name": "Bob", "age": 30}
for key, value in person.items():
    print(key)
    print(value)
`,
  correctOutput: "name\nBob\nage\n30",
};

export default problem;
