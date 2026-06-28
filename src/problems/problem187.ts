import type { Problem } from './types';

const problem: Problem = {
  id: 187,
  title: "if の中にさらに if/elif/else があります（入れ子）。出力を予想してください",
  type: 'predict-output',
  code: `x = 6
if x > 0:
    if x > 10:
        print("big")
    elif x > 5:
        print("medium")
    else:
        print("small")
    print("positive")
else:
    print("negative")
`,
  correctOutput: "medium\npositive",
};

export default problem;
