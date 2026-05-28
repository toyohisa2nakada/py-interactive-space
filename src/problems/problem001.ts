import type { Problem } from './types';

const problem: Problem = {
  id: 1,
  title: "a+b を出力せよ",
  type: 'fill-in',
  codeWithMarker: `# 使用できる文字は a b + - * / だけです。

a = 1
b = 2
print(§§§§)
`,
  correctOutput: "3",
};

export default problem;
