import type { Problem } from './types';

const problem: Problem = {
  id: 179,
  title: "minutes が 20 を超えると True、20 以内なら False を返す関数 is_late です。出力を予想してください",
  type: 'predict-output',
  code: `def is_late(minutes):
    if minutes > 20:
        return True
    else:
        return False

print(is_late(20))
print(is_late(21))
print(is_late(15))
`,
  correctOutput: "False\nTrue\nFalse",
};

export default problem;
