import type { Problem } from './types';

const problem: Problem = {
  id: 36,
  title: "1〜4 をすべてかけ合わせた結果を予想してください",
  type: 'predict-output',
  code: `result = 1
for i in range(1, 5):
    result *= i
print(result)
`,
  correctOutput: "24",
};

export default problem;
