import type { Problem } from './types';

const problem: Problem = {
  id: 118,
  title: "出力が 50 になるように、空欄に数字を入力してください",
  type: 'fill-in',
  codeWithMarker: `print(42 + §§)
`,
  correctOutput: "50",
};

export default problem;
