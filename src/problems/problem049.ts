import type { Problem } from './types';

const problem: Problem = {
  id: 49,
  title: "リスト内包表記②: 二乗",
  type: 'predict-output',
  code: `squares = [x ** 2 for x in range(1, 6)]
print(squares)
`,
  correctOutput: "[1, 4, 9, 16, 25]",
};

export default problem;
