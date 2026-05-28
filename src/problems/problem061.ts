import type { Problem } from './types';

const problem: Problem = {
  id: 61,
  title: "range のステップ: 奇数のみ",
  type: 'fill-in',
  codeWithMarker: `# 1, 3, 5, 7, 9 を出力せよ
for i in range(1, 11, §):
    print(i)
`,
  correctOutput: "1\n3\n5\n7\n9",
};

export default problem;
