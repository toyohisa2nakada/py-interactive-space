import type { Problem } from './types';

const problem: Problem = {
  id: 258,
  title: "n が偶数でありかつ正の場合に True が出力されるよう、空欄を埋めてください",
  type: 'fill-in',
  codeWithMarker: `n = 10
if n % 2 == 0 §§§§ n > 0:
    print(True)
else:
    print(False)
`,
  correctOutput: "True",
  requiredTokens: ['and'],
};

export default problem;
