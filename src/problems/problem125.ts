import type { Problem } from './types';

const problem: Problem = {
  id: 125,
  title: "judge関数の引数(パラメータ)部分を完成させてください",
  type: 'fill-in',
  codeWithMarker: `def judge(§§§):
    if s >= 60:
        return "単位取得"
    else:
        return "落単"

print(judge(59))
print(judge(60))
print(judge(100))
`,
  correctOutput: "落単\n単位取得\n単位取得",
  requiredTokens: ['s'],
};

export default problem;
