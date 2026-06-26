import type { Problem } from './types';

const problem: Problem = {
  id: 167,
  title: "range(1, 10, 2) は、1からスタートして2ずつ増える数字を10未満の範囲で生成します。出力を予想してください",
  type: 'predict-output',
  code: `for n in range(1, 10, 2):
    print(n)
`,
  correctOutput: "1\n3\n5\n7\n9",
};

export default problem;
