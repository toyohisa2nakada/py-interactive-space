import type { Problem } from './types';

const problem: Problem = {
  id: 127,
  title: "関数呼び出しを埋めてプログラムを完成させてください。関数名は def によって定義されています",
  type: 'fill-in',
  codeWithMarker: `def chk(s):
    if s >= 60:
        return "単位取得"
    else:
        return "落単"

print(§§§§§§(60))
`,
  correctOutput: "単位取得",
  requiredTokens: ['chk'],
};

export default problem;
