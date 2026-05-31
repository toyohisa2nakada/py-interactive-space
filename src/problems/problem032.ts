import type { Problem } from './types';

const problem: Problem = {
  id: 32,
  title: "文章を分割して最初の単語を取り出します。結果を予想してください",
  type: 'predict-output',
  code: `s = "Python Programming"
print(s.split()[0])
`,
  correctOutput: "Python",
};

export default problem;
