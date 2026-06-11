import type { Problem } from './types';

const problem: Problem = {
  id: 106,
  title: "for ループで 1 から 2 つおきに表示します。出力を予想してください",
  type: 'predict-output',
  code: `for i in range(1, 5, 2):
    print(i)
`,
  correctOutput: "1\n3",
};

export default problem;
