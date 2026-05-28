import type { Problem } from './types';

const problem: Problem = {
  id: 57,
  title: "range の引数: 0 から 4 まで出力",
  type: 'fill-in',
  codeWithMarker: `# 0 から 4 まで（5個）を順に出力せよ
for i in range(§):
    print(i)
`,
  correctOutput: "0\n1\n2\n3\n4",
};

export default problem;
