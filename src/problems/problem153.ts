import type { Problem } from './types';

const problem: Problem = {
  id: 153,
  title: "出力を予想してください。%は余りを計算します。出力が複数になる場合、改行によって区切ってください",
  type: 'predict-output',
  code: `for n in [0, 1, 2, 3]:
    if n % 2 == 0:
        print(n)
`,
  correctOutput: "0\n2",
};

export default problem;
