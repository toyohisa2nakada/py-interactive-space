import type { Problem } from './types';

const problem: Problem = {
  id: 126,
  title: "def 部分の関数名を完成させてください",
  type: 'fill-in',
  codeWithMarker: `def §§§§§(s):
    if s >= 60:
        return "単位取得"
    else:
        return "落単"

print(judge(59))
print(judge(60))
print(judge(100))
`,
  correctOutput: "落単\n単位取得\n単位取得",
  requiredTokens: ['judge'],
};

export default problem;
