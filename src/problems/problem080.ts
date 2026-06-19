import type { Problem } from './types';

const problem: Problem = {
  id: 80,
  title: "前に「Hello, 」(, の後ろに半角スペースがあります)、後ろに「!」をつける関数を作成してください。例えば引数（パラメータ）が World の場合、 Hello, World! が出力されます",
  type: 'fill-in',
  codeWithMarker: `def greet(name):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(greet("World"))
print(greet("Japan"))
print(greet("iU"))
`,
  correctOutput: "Hello, World!\nHello, Japan!\nHello, iU!",
  requiredTokens: ['name'],
};

export default problem;
