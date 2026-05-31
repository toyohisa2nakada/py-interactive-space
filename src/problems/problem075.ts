import type { Problem } from './types';

const problem: Problem = {
  id: 75,
  title: "正・ゼロ・負を判定して返す関数を完成させてください",
  type: 'fill-in',
  codeWithMarker: `def check_sign(x):
    if x < 0:
        return "負"
    §§§§§§§§§§§§§§§§§§§§§§:
        return "ゼロ"
    else:
        return "正"

print(check_sign(-1))
print(check_sign(0))
print(check_sign(1))
`,
  correctOutput: "負\nゼロ\n正",
  requiredTokens: ['elif', 'x'],
};

export default problem;
