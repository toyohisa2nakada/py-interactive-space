import type { Problem } from './types';

const problem: Problem = {
  id: 40,
  title: "strip() で空白除去",
  type: 'predict-output',
  code: `s = "  hello  "
print(s.strip())
`,
  correctOutput: "hello",
};

export default problem;
