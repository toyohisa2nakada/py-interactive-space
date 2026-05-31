import type { Problem } from './types';

const problem: Problem = {
  id: 85,
  title: "2 つの数のうち大きい方を返す関数 max_of_two を完成させてください",
  type: 'fill-in',
  codeWithMarker: `# a と b のうち大きい方を返す関数 max_of_two を完成させてください
# 例: max_of_two(3, 7) → 7、max_of_two(10, 5) → 10、max_of_two(4, 4) → 4
def max_of_two(a, b):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(max_of_two(3, 7))
print(max_of_two(10, 5))
print(max_of_two(4, 4))
`,
  correctOutput: "7\n10\n4",
  requiredTokens: ['return', 'a', 'b'],
};

export default problem;
