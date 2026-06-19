import type { Problem } from './types';

const problem: Problem = {
  id: 32,
  title: "splitはsの文字をスペースで分割します。[0]は最初の要素を意味します。結果を予想してください",
  type: 'predict-output',
  code: `s = "Python Programming"
print(s.split()[0])
`,
  correctOutput: "Python",
};

export default problem;
