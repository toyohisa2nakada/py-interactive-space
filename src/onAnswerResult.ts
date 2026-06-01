/**
 * 問題に回答したときに呼ばれるコールバック関数
 *
 * App.tsx から正解・不正解が確定するたびに呼び出されます。
 * この関数の中身を自由に実装してください。
 *
 * @param setPosition  セット内の何問目か（1-indexed）
 * @param problemId    問題番号（problem.id）
 * @param correct      正解なら true、不正解なら false
 * @param totalInSet   そのセットの総問題数
 * @param studentId    学籍番号（?set=N なしで開いた場合は空文字）
 * @param setNumber    セット番号（?set=N の N、URLパラメータなしの場合は null）
 */
export function onAnswerResult(
  setPosition: number,
  problemId:   number,
  correct:     boolean,
  totalInSet:  number,
  studentId:   string,
  setNumber:   number | null,
): void {
  // ── ここに独自実装を追加してください ────────────────────────
  // 例:
  // console.log({ setPosition, problemId, correct, totalInSet, studentId });
}
