import type { Problem } from './types';

const problem: Problem = {
  id: 100,
  title: "FizzBuzz を判定する関数 fizzbuzz を作ってください",
  type: 'fill-in',
  codeWithMarker: `# FizzBuzz を判定する関数 fizzbuzz を作ってください
# 3の倍数→"Fizz"、5の倍数→"Buzz"、両方の倍数→"FizzBuzz"、それ以外→数字の文字列
# 例: fizzbuzz(3) → "Fizz"、fizzbuzz(5) → "Buzz"、fizzbuzz(15) → "FizzBuzz"、fizzbuzz(7) → "7"

§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(fizzbuzz(3))
print(fizzbuzz(5))
print(fizzbuzz(15))
print(fizzbuzz(7))
`,
  correctOutput: "Fizz\nBuzz\nFizzBuzz\n7",
  requiredTokens: ['def', 'fizzbuzz', 'return'],
};

export default problem;
