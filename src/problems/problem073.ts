import type { Problem } from './types';

const problem: Problem = {
  id: 73,
  title: "文字列を大文字に変換して表示するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `s = "hello world"
result = §§§§§§§§§§§§§
print(result)
`,
  correctOutput: "HELLO WORLD",
  requiredTokens: ['s', 'upper'],
};

export default problem;
