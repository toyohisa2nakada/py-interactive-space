import type { Problem } from './types';

const problem: Problem = {
  id: 43,
  title: "リストの単語をスペースで結合した結果を予想してください",
  type: 'predict-output',
  code: `words = ["Python", "is", "fun"]
print(" ".join(words))
`,
  correctOutput: "Python is fun",
};

export default problem;
