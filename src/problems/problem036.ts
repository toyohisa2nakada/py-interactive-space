import type { Problem } from './types';

const problem: Problem = {
  id: 36,
  title: "result *= i は、resultの数値にiをかけます。例えばresultが2でiが3なら resultは6になります",
  type: 'predict-output',
  code: `result = 1
for i in range(1, 5):
    result *= i
print(result)
`,
  correctOutput: "24",
};

export default problem;
