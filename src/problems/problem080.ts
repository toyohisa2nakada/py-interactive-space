import type { Problem } from './types';

const problem: Problem = {
  id: 80,
  title: "関数の本体を埋めよ②: greet",
  type: 'fill-in',
  codeWithMarker: `def greet(name):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

greet("World")
`,
  correctOutput: "Hello, World!",
};

export default problem;
