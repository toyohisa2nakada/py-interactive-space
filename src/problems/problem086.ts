import type { Problem } from './types';

const problem: Problem = {
  id: 86,
  title: "関数を完成せよ⑥: greet（多テスト）",
  type: 'fill-in',
  codeWithMarker: `# 関数 greet を完成させよ（"こんにちは、{name}！" と出力する）
# テスト: greet("Alice")→"こんにちは、Alice！"
def greet(name):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

greet("Alice")
greet("Bob")
greet("太郎")
`,
  correctOutput: "こんにちは、Alice！\nこんにちは、Bob！\nこんにちは、太郎！",
};

export default problem;
