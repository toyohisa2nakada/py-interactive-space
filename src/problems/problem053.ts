import type { Problem } from './types';

const problem: Problem = {
  id: 53,
  title: "変数代入③: 文字列を代入",
  type: 'fill-in',
  codeWithMarker: `# name に "太郎" を代入せよ
name = §§§§§
print("こんにちは、" + name)
`,
  correctOutput: "こんにちは、太郎",
};

export default problem;
