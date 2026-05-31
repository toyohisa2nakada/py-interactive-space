import type { Problem } from './types';

const problem: Problem = {
  id: 86,
  title: "「こんにちは、〇〇！」と表示する関数 greet を完成させてください",
  type: 'fill-in',
  codeWithMarker: `# "こんにちは、〇〇！" と表示する関数 greet を完成させてください
# 例: greet("Alice") → こんにちは、Alice！
def greet(name):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

greet("Alice")
greet("Bob")
greet("太郎")
`,
  correctOutput: "こんにちは、Alice！\nこんにちは、Bob！\nこんにちは、太郎！",
  requiredTokens: ['name'],
};

export default problem;
