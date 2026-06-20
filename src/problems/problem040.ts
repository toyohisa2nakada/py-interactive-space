import type { Problem } from './types';

const problem: Problem = {
  id: 40,
  title: "stripは、文字列の前後の空白を取り除きます",
  type: 'predict-output',
  code: `s = "  hello  "
print(s.strip())
`,
  correctOutput: "hello",
};

export default problem;
