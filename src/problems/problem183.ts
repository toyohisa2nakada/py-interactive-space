import type { Problem } from './types';

const problem: Problem = {
  id: 183,
  title: "if と elif のどちらにも一致しない場合、何も表示されません。最後の print は if とは関係なく実行されます。出力を予想してください",
  type: 'predict-output',
  code: `x = -5
if x > 100:
    print("巨大")
elif x > 50:
    print("大きい")
print("終了")
`,
  correctOutput: "終了",
};

export default problem;
