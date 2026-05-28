import type { Problem } from './types';

const problem: Problem = {
  id: 52,
  title: "変数代入②: a + b が 8 になるように",
  type: 'fill-in',
  codeWithMarker: `# a + b の結果が 8 になるように a に値を代入せよ
a = §
b = 3
print(a + b)
`,
  correctOutput: "8",
};

export default problem;
