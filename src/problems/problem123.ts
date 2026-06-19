import type { Problem } from './types';

const problem: Problem = {
  id: 123,
  title: "引数の2倍を返す関数 double です。出力を予想してください",
  type: 'predict-output',
  code: `def double(n):
    return n * 2

print(double(2))
print(double(3))
print(double(5))
`,
  correctOutput: "4\n6\n10",
};

export default problem;
