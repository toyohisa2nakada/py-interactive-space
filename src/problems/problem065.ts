import type { Problem } from './types';

const problem: Problem = {
  id: 65,
  title: "greeting に「Hello」を代入して「Hello World」と表示するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `# greeting に "Hello" を代入してください
greeting = §§§§§§§
print(greeting + " World")
`,
  correctOutput: "Hello World",
};

export default problem;
