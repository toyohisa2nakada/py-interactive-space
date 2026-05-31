import type { Problem } from './types';

const problem: Problem = {
  id: 80,
  title: "「Hello, World!」と表示する関数 greet を完成させてください",
  type: 'fill-in',
  codeWithMarker: `def greet(name):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

greet("World")
`,
  correctOutput: "Hello, World!",
  requiredTokens: ['name'],
};

export default problem;
