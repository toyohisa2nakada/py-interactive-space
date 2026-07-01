import type { Problem } from './types';

const problem: Problem = {
  id: 244,
  title: "items() とf文字列を使って辞書のキーと値を表示します。出力を予想してください",
  type: 'predict-output',
  code: `prices = {"apple": 120, "banana": 80, "grape": 400}
for name, price in prices.items():
    print(f"{name}: {price}円")
`,
  correctOutput: "apple: 120円\nbanana: 80円\ngrape: 400円",
};

export default problem;
