import type { Problem } from './types';

const problem: Problem = {
  id: 55,
  title: "a を b で割った余りを計算して表示するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `a = 10
b = 3
# a を b で割った余りを表示してください
print(§§§§§)
`,
  correctOutput: "1",
  requiredTokens: ['a', 'b', '%'],
};

export default problem;
