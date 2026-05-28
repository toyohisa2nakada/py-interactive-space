import type { Problem } from './types';

const problem: Problem = {
  id: 32,
  title: "文字列のsplit: 最初の単語",
  type: 'predict-output',
  code: `s = "Python Programming"
print(s.split()[0])
`,
  correctOutput: "Python",
};

export default problem;
