/**
 * 問題に回答したときに呼ばれるコールバック関数
 *
 * App.tsx から正解・不正解が確定するたびに呼び出されます。
 * この関数の中身を自由に実装してください。
 *
 * @param setNumber       セット番号（?set=N の N。URLパラメータなしなら null）
 * @param setPosition     セット内の何問目か（1-indexed）
 * @param problemId       問題番号（problem.id）
 * @param correct         正解なら true、不正解なら false
 * @param problemStatuses セット全問題の正誤状況（配列インデックスは問題の順番）
 * @param studentId       学籍番号（?set=N なしで開いた場合は空文字）
 * @param studentName     氏名（?set=N なしで開いた場合は空文字）
 */

/** 各問題のステータス */
export type ProblemStatus = 'correct' | 'incorrect' | 'unanswered';

export function onAnswerResult(
  setNumber: number | null,
  setPosition: number,
  problemId: number,
  correct: boolean,
  problemStatuses: ProblemStatus[],
  studentId: string,
  studentName: string,
): void {
  console.log({ setNumber, setPosition, problemId, correct, problemStatuses, studentId, studentName });

  post({ setNumber, setPosition, problemId, correct, studentId, studentName, total: "" });
  if (problemStatuses.every(e => e === 'correct')) {
    post({ setNumber, setPosition, problemId, correct, studentId, studentName, total: "すべて正解" });
  }
}

export function onSessionStart(
  setNumber: number | null,
  studentId: string,
  studentName: string,
): void {
  console.log(studentId, studentName);
  post({ setNumber, setPosition: -1, problemId: -1, correct: '', studentId, studentName, total: "ログイン" })
}

function post(postData: any) {
  const gasURL = "https://script.google.com/macros/s/AKfycbxS8cikAV_Sbt-Zd65bvyHYqmV8DwUgl_8Vc1Rcct171Dk8TPhurZhZ6_s75dYN1JfYiA/exec";

  console.log("postData", postData);
  fetch(gasURL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(postData)
  }).then(() => {
    console.log("送信完了！スプレッドシートを確認してください。");
  }).catch(err => {
    console.error("エラー:", err);
  });
}
