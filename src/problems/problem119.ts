import type { Problem } from './types';

const problem: Problem = {
  id: 119,
  title: "f 文字列で商品名と価格を組み合わせた文を予想してください",
  type: 'predict-output',
  code: `item = "りんご"
price = 150
print(f"{item}は{price}円です")
`,
  correctOutput: "りんごは150円です",
};

export default problem;
