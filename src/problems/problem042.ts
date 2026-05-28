import type { Problem } from './types';

const problem: Problem = {
  id: 42,
  title: "辞書のアクセス",
  type: 'predict-output',
  code: `person = {"name": "Alice", "age": 20}
print(person["name"])
`,
  correctOutput: "Alice",
};

export default problem;
