import type { Problem } from './types';

const problem: Problem = {
  id: 53,
  title: "name に「太郎」を代入して挨拶を表示するプログラムを完成させてください",
  type: 'fill-in',
  codeWithMarker: `# name に "太郎" を代入してください
name = §§§§§
print("こんにちは、" + name)
`,
  correctOutput: "こんにちは、太郎",
};

export default problem;
