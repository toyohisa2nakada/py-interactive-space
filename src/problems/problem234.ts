import type { Problem } from './types';

const problem: Problem = {
  id: 234,
  title: "数字が偶数なら「even」、奇数なら「odd」という文字を返す関数を作成してください",
  type: 'fill-in',
  codeWithMarker: `# defから書き始めてください
§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(to_string(7))
print(to_string(10))
print(to_string(-5))
print(to_string(-8))
`,
  correctOutput: "odd\neven\nodd\neven",
  requiredTokens: ['def', 'to_string', 'return'],
};

export default problem;
