import type { Problem } from './types';

const problem: Problem = {
  id: 162,
  title: "whileは条件に一致している限り、処理を繰り返します。この場合の条件は i <= 3 (iは3以下)です。i+=1は、iの数字を1つ増やします。出力を予想してください",
  type: 'predict-output',
  code: `i = 2
while i <= 3:
    print(i)
    i += 1
`,
  correctOutput: "2\n3",
};

export default problem;
