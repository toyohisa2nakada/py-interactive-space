import type { Problem } from './types';

const problem: Problem = {
  id: 229,
  title: "文字の最初に「Hello,」最後に「!」を付加する関数を作成してください。関数の引数(関数の実行パラメータ)をsとしたとき、return f\"{s}!\"とするとsに入っている文字に ! を付けた文字を返します",
  type: 'fill-in',
  codeWithMarker: `# defから書き始めます
§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(greeting("Python"))
print(greeting("World"))
print(greeting("Coding"))
`,
  correctOutput: "Hello,Python!\nHello,World!\nHello,Coding!",
};

export default problem;
