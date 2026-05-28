import type { Problem } from './types';

const problem: Problem = {
  id: 65,
  title: "変数代入⑤: 文字列を代入②",
  type: 'fill-in',
  codeWithMarker: `# greeting に "Hello" を代入せよ
greeting = §§§§§§§
print(greeting + " World")
`,
  correctOutput: "Hello World",
};

export default problem;
