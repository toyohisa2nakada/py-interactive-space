import type { Problem } from './types';

const problem: Problem = {
  id: 114,
  title: "Falseと判定されるように、空欄に数字を入力してください",
  type: 'fill-in',
  codeWithMarker: `print(3 in [§§, 5, 10])
`,
  correctOutput: "False",
};

export default problem;
