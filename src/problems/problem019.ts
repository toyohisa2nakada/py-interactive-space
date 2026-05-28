import type { Problem } from './types';

const problem: Problem = {
  id: 19,
  title: "whileループの出力",
  type: 'predict-output',
  code: `i = 1
while i <= 3:
    print(i)
    i += 1
`,
  correctOutput: "1\n2\n3",
};

export default problem;
