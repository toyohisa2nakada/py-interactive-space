import type { Problem } from './types';

const problem: Problem = {
  id: 83,
  title: "偶数なら True を返す関数 is_even を完成させてください",
  type: 'fill-in',
  codeWithMarker: `# 偶数なら True、奇数なら False を返す関数 is_even を完成させてください
# 例: is_even(4) → True、is_even(7) → False、is_even(0) → True
def is_even(n):
    §§§§§§§§§§§§§§§§§§§§§§§§§

print(is_even(4))
print(is_even(7))
print(is_even(0))
`,
  correctOutput: "True\nFalse\nTrue",
  requiredTokens: ['return', 'n'],
};

export default problem;
