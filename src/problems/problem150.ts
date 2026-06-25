import type { Problem } from './types';

const problem: Problem = {
  id: 150,
  title: "出力を予想してください。出力が複数になる場合、改行によって区切ってください",
  type: 'predict-output',
  code: `group = ["person1", "person2", "person3"]
for p in group:
    print(p)
`,
  correctOutput: "person1\nperson2\nperson3",
};

export default problem;
