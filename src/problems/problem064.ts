import type { Problem } from './types';

const problem: Problem = {
  id: 64,
  title: "a × b が 36 になるよう、a の値を入れてください",
  type: 'fill-in',
  codeWithMarker: `# a × b が 36 になるよう a に値を入れてください
a = §§
b = 6
print(a * b)
`,
  correctOutput: "36",
};

export default problem;
