import type { Problem } from './types';

const problem: Problem = {
  id: 82,
  title: "a と b の合計を返す関数 add を完成させてください",
  type: 'fill-in',
  codeWithMarker: `# a と b の合計を返す関数 add を完成させてください
# 例: add(3, 4) → 7、add(10, 0) → 10、add(-1, 5) → 4
def add(a, b):
    §§§§§§§§§§§§§§§§§§§§§§§§§

print(add(3, 4))
print(add(10, 0))
print(add(-1, 5))
`,
  correctOutput: "7\n10\n4",
  requiredTokens: ['return', 'a', 'b'],
};

export default problem;
