import type { Problem } from './types';

const problem: Problem = {
  id: 87,
  title: "摂氏を華氏に変換する関数を完成させてください",
  type: 'fill-in',
  codeWithMarker: `# 摂氏を華氏に変換する関数を完成させてください（F = C × 9/5 + 32）
# 例: 0°C → 32.0°F、100°C → 212.0°F、-40°C → -40.0°F
def celsius_to_fahrenheit(c):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(celsius_to_fahrenheit(0))
print(celsius_to_fahrenheit(100))
print(celsius_to_fahrenheit(-40))
`,
  correctOutput: "32.0\n212.0\n-40.0",
  requiredTokens: ['return', 'c'],
};

export default problem;
