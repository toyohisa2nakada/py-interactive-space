import type { Problem } from './types';

const problem: Problem = {
  id: 204,
  title: "10 を 3 で割った余りを予想してください",
  type: 'predict-output',
  code: `x = 10
y = 3
print(x % y)
`,
  correctOutput: "1",
};

export default problem;
