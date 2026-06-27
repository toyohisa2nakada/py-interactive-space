import type { Problem } from './types';

const problem: Problem = {
  id: 178,
  title: "引数の引き算を返す関数 minus です。出力を予想してください",
  type: 'predict-output',
  code: `def minus(a, b):
    return a - b

print(minus(5, 3))
print(minus(10, 4))
print(minus(2, 2))
`,
  correctOutput: "2\n6\n0",
};

export default problem;
