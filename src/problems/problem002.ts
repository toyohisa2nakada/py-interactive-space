import type { Problem } from './types';

const problem: Problem = {
  id: 2,
  title: "print(\"a\") の出力を予想してください",
  type: 'predict-output',
  code: `
print("a")
`,
  correctOutput: "a",
};

export default problem;
