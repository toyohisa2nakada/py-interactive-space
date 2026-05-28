import type { Problem } from './types';

const problem: Problem = {
  id: 58,
  title: "range のステップ: 偶数のみ",
  type: 'fill-in',
  codeWithMarker: `# 0, 2, 4, 6, 8 を出力せよ
for i in range(0, 10, §):
    print(i)
`,
  correctOutput: "0\n2\n4\n6\n8",
};

export default problem;
