import type { Problem } from './types';

const problem: Problem = {
  id: 64,
  title: "変数代入④: 積が 36 になるように",
  type: 'fill-in',
  codeWithMarker: `# a * b の結果が 36 になるように a に値を代入せよ
a = §§
b = 6
print(a * b)
`,
  correctOutput: "36",
};

export default problem;
