import type { Problem } from './types';

const problem: Problem = {
  id: 188,
  title: "if の中にさらに if があり、else も追加されています。出力を予想してください",
  type: 'predict-output',
  code: `x = -1
if x > 0:
    print("positive")
    if x > 3:
        print("big positive")
else:
    print("negative")
`,
  correctOutput: "negative",
};

export default problem;
