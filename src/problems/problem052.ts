import type { Problem } from './types';

const problem: Problem = {
  id: 52,
  title: "a + b が 8 になるよう、a の値を入れてください",
  type: 'fill-in',
  codeWithMarker: `# a + b が 8 になるよう a に値を入れてください
a = §
b = 3
print(a + b)
`,
  correctOutput: "8",
};

export default problem;
