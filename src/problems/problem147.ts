import type { Problem } from './types';

const problem: Problem = {
  id: 147,
  title: "items() とf文字列を使って辞書のキーと値を表示します。出力を予想してください",
  type: 'predict-output',
  code: `prices = {"apple": 150, "banana": 100, "cherry": 300}
for name, price in prices.items():
    print(f"{name}: {price}円")
`,
  correctOutput: "apple: 150円\nbanana: 100円\ncherry: 300円",
};

export default problem;
