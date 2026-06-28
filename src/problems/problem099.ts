import type { Problem } from './types';

const problem: Problem = {
  id: 99,
  title: "数字が偶数なら「even」、奇数なら「odd」という文字を返す関数を作成してください",
  type: 'fill-in',
  codeWithMarker: `# defから書き始めてください
§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(to_string(3))
print(to_string(0))
print(to_string(-1))
print(to_string(-2))
`,
  correctOutput: "odd\neven\nodd\neven",
  requiredTokens: ['def', 'to_string', 'return'],
};

export default problem;
