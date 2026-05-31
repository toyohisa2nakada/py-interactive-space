import type { Problem } from './types';

const problem: Problem = {
  id: 38,
  title: "f 文字列で名前と年齢を組み合わせた文を予想してください",
  type: 'predict-output',
  code: `name = "Alice"
age = 20
print(f"{name}は{age}歳です")
`,
  correctOutput: "Aliceは20歳です",
};

export default problem;
