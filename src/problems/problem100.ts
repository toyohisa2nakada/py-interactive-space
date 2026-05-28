import type { Problem } from './types';

const problem: Problem = {
  id: 100,
  title: "関数を作れ③: FizzBuzz（多テスト）",
  type: 'fill-in',
  codeWithMarker: `# 関数 fizzbuzz を作れ（3の倍数→"Fizz"、5の倍数→"Buzz"、両方→"FizzBuzz"、それ以外→数字の文字列）
# テスト: fizzbuzz(3)→"Fizz", fizzbuzz(5)→"Buzz", fizzbuzz(15)→"FizzBuzz", fizzbuzz(7)→"7"

§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

print(fizzbuzz(3))
print(fizzbuzz(5))
print(fizzbuzz(15))
print(fizzbuzz(7))
`,
  correctOutput: "Fizz\nBuzz\nFizzBuzz\n7",
};

export default problem;
