import type { Problem } from './types';

const problem: Problem = {
  id: 49,
  title: "1〜5 の二乗を並べたリストを予想してください",
  type: 'predict-output',
  code: `squares = [x ** 2 for x in range(1, 6)]
print(squares)
`,
  correctOutput: "[1, 4, 9, 16, 25]",
};

export default problem;
