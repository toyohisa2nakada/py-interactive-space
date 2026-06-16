import type { Problem } from './types';

const problem: Problem = {
  id: 110,
  title: "Sと判定されるように、空欄に数字を入力してください",
  type: 'fill-in',
  codeWithMarker: `score = §§
if score >= 90:
    print("S")
elif score >= 80:
    print("A")
elif score >= 70:
    print("B")
elif score >= 60:
    print("C")
else:
    print("D")
`,
  correctOutput: "S",
};

export default problem;
