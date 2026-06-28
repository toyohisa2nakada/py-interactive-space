import type { Problem } from './types';

const problem: Problem = {
  id: 98,
  title: "数字が奇数なら1を足して偶数に、偶数はそのまま返す関数を完成させてください",
  type: 'fill-in',
  codeWithMarker: `# defから書き始めてください
§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(to_even(3))
print(to_even(0))
print(to_even(-1))
print(to_even(-2))
`,
  correctOutput: "4\n0\n0\n-2",
  requiredTokens: ['def', 'to_even', 'return'],
};

export default problem;
