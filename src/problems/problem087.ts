import type { Problem } from './types';

const problem: Problem = {
  id: 87,
  title: "関数を完成せよ⑦: celsius_to_fahrenheit（多テスト）",
  type: 'fill-in',
  codeWithMarker: `# 関数 celsius_to_fahrenheit を完成させよ（F = C * 9/5 + 32）
# テスト: 0→32.0, 100→212.0, -40→-40.0
def celsius_to_fahrenheit(c):
    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(celsius_to_fahrenheit(0))
print(celsius_to_fahrenheit(100))
print(celsius_to_fahrenheit(-40))
`,
  correctOutput: "32.0\n212.0\n-40.0",
};

export default problem;
