import type { Problem } from './types';

const problem: Problem = {
  id: 86,
  title: "「こんにちは、〇〇!!」と表示する関数 greet を完成させてください。f\"{name}\"を使用すると変数の値を含んだ文字列を作成できます",
  type: 'fill-in',
  codeWithMarker: `def greet(name):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(greet("Alice"))
print(greet("Bob"))
print(greet("太郎"))
`,
  correctOutput: "こんにちは、Alice!!\nこんにちは、Bob!!\nこんにちは、太郎!!",
  requiredTokens: ['name'],
};

export default problem;
