import type { Problem } from './types';

const problem: Problem = {
  id: 130,
  title: "文字列の前後の空白を取り除くメソッドを使って完成させてください",
  type: 'fill-in',
  codeWithMarker: `s = " hello world  ! "
print(s.§§§§§())
`,
  correctOutput: "hello world  !",
  requiredTokens: ['strip'],
};

export default problem;
