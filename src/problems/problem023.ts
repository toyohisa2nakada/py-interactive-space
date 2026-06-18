import type { Problem } from './types';

const problem: Problem = {
  id: 23,
  title: "range(5)は0～4までの数字を作ります。i % 2 == 0 は その数字が2で割り切れるときに一致します",
  type: 'predict-output',
  code: `for i in range(5):
    if i % 2 == 0:
        print(i)
`,
  correctOutput: "0\n2\n4",
};

export default problem;
