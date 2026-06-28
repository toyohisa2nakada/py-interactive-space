import type { Problem } from './types';

const problem: Problem = {
  id: 87,
  title: "摂氏(c)を華氏(f)に変換する関数を完成させてください。（f = c × 9/5 + 32）",
  type: 'fill-in',
  codeWithMarker: `def celsius_to_fahrenheit(c):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(celsius_to_fahrenheit(0))
print(celsius_to_fahrenheit(100))
print(celsius_to_fahrenheit(-40))
`,
  correctOutput: "32.0\n212.0\n-40.0",
  requiredTokens: ['return', 'c'],
};

export default problem;
