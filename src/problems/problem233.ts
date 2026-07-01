import type { Problem } from './types';

const problem: Problem = {
  id: 233,
  title: "数字が奇数なら1を足して偶数に、偶数はそのまま返す関数を完成させてください",
  type: 'fill-in',
  codeWithMarker: `# defから書き始めてください
§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(to_even(5))
print(to_even(2))
print(to_even(-3))
print(to_even(-4))
`,
  correctOutput: "6\n2\n-2\n-4",
  requiredTokens: ['def', 'to_even', 'return'],
};

export default problem;
