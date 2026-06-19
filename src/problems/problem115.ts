import type { Problem } from './types';

const problem: Problem = {
  id: 115,
  title: "print(\"42\" + \"1\") の出力を予想してください",
  type: 'predict-output',
  code: `print("42" + "1")
`,
  correctOutput: "421",
};

export default problem;
