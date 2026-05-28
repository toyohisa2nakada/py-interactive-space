import type { Problem } from './types';

const problem: Problem = {
  id: 82,
  title: "関数を完成せよ②: add（多テスト）",
  type: 'fill-in',
  codeWithMarker: `# 関数 add を完成させよ（a + b を返す）
# テスト: add(3,4)→7, add(10,0)→10, add(-1,5)→4
def add(a, b):
    §§§§§§§§§§§§§§§§§§§§§§§§§

print(add(3, 4))
print(add(10, 0))
print(add(-1, 5))
`,
  correctOutput: "7\n10\n4",
};

export default problem;
