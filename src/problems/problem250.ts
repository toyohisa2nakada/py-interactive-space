import type { Problem } from './types';

const problem: Problem = {
  id: 250,
  title: "if の中にさらに if があります（入れ子）。出力を予想してください",
  type: 'predict-output',
  code: `x = 10
if x > 0:
    print("positive")
    if x > 3:
        print("big positive")
`,
  correctOutput: "positive\nbig positive",
};

export default problem;
