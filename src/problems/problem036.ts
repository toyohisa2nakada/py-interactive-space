import type { Problem } from './types';

const problem: Problem = {
  id: 36,
  title: "累積積（階乗の途中）",
  type: 'predict-output',
  code: `result = 1
for i in range(1, 5):
    result *= i
print(result)
`,
  correctOutput: "24",
};

export default problem;
