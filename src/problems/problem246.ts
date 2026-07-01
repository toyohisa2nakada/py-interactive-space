import type { Problem } from './types';

const problem: Problem = {
  id: 246,
  title: "if が 2 つあります。それぞれ独立した条件です。出力を予想してください",
  type: 'predict-output',
  code: `x = 20
if x > 0:
    print("正")
if x > 10:
    print("大きい")
`,
  correctOutput: "正\n大きい",
};

export default problem;
