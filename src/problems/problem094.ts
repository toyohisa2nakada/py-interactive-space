import type { Problem } from './types';

const problem: Problem = {
  id: 94,
  title: "文字の最初に「Hello,」最後に「!」を付加する関数を作成してください",
  type: 'fill-in',
  codeWithMarker: `# defから書き始めます
§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(greeting("iU"))
print(greeting("Tokyo"))
print(greeting("Japan"))
`,
  correctOutput: "Hello,iU!\nHello,Tokyo!\nHello,Japan!",
};

export default problem;
