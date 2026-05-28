import type { Problem } from './types';

const problem: Problem = {
  id: 43,
  title: "join() で文字列結合",
  type: 'predict-output',
  code: `words = ["Python", "is", "fun"]
print(" ".join(words))
`,
  correctOutput: "Python is fun",
};

export default problem;
