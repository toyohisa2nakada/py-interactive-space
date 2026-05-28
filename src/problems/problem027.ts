import type { Problem } from './types';

const problem: Problem = {
  id: 27,
  title: "文字列のsplit",
  type: 'predict-output',
  code: `s = "a,b,c"
parts = s.split(",")
print(parts[1])
`,
  correctOutput: "b",
};

export default problem;
