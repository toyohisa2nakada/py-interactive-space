import type { Problem } from './types';

const problem: Problem = {
  id: 129,
  title: "stripは、文字列の前後の空白を取り除きます。出力を予想してください",
  type: 'predict-output',
  code: `s = " hello world! "
print(s.strip())
`,
  correctOutput: "hello world!",
};

export default problem;
