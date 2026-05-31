import type { Problem } from './types';

const problem: Problem = {
  id: 28,
  title: "3 がリストに含まれているか確認します。結果を予想してください",
  type: 'predict-output',
  code: `print(3 in [1, 2, 3, 4, 5])
`,
  correctOutput: "True",
};

export default problem;
