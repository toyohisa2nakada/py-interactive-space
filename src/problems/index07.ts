import type { Problem } from './types';
import problem193 from './problem193';
import problem075 from './problem075';
import problem078 from './problem078';
import problem208 from './problem208';
import problem170 from './problem170';
import problem171 from './problem171';
import problem087 from './problem087';
import problem088 from './problem088';
import problem089 from './problem089';
import problem090 from './problem090';
import problem093 from './problem093';
import problem094 from './problem094';
import problem095 from './problem095';
import problem096 from './problem096';
import problem097 from './problem097';
import problem098 from './problem098';
import problem099 from './problem099';
import problem100 from './problem100';

import problem042 from './problem042';
import problem139 from './problem139';
import problem140 from './problem140';
import problem141 from './problem141';
import problem142 from './problem142';
import problem143 from './problem143';
import problem144 from './problem144';
import problem145 from './problem145';
import problem146 from './problem146';
import problem147 from './problem147';
import problem180 from './problem180';
import problem181 from './problem181';
import problem182 from './problem182';
import problem183 from './problem183';
import problem184 from './problem184';
import problem185 from './problem185';
import problem186 from './problem186';
import problem187 from './problem187';
import problem188 from './problem188';
import problem189 from './problem189';
import problem207 from './problem207';
import problem219 from './problem219';
import problem220 from './problem220';
import problem221 from './problem221';
import problem222 from './problem222';

// セット6（上級：全文作成・応用関数）
export const problemSet06: Problem[] = [
  // 辞書からnameの値を取り出した結果を予想 (predict-output)
  problem042,
  // 辞書からageの値を取り出した結果を予想 (predict-output)
  problem139,
  // 辞書からpriceの値を出力するプログラムを完成 (fill-in)
  problem140,
  // 辞書に新しいキーを追加した結果を予想 (predict-output)
  problem141,
  // 辞書の既存のキーの値を上書きした結果を予想 (predict-output)
  problem142,
  // 上書き前後で値がどう変わるか出力予想 (predict-output)
  problem143,
  // inで辞書にキーが存在するか確認、結果予想 (predict-output)
  problem144,
  // delでキーを削除後、inで確認した結果を予想 (predict-output)
  problem145,
  // items()で辞書のキーと値を順に取り出す、出力予想 (predict-output)
  problem146,
  // items()とf文字列で辞書のキーと値を表示、出力予想 (predict-output)
  problem147,


  // if/elseの基本、出力予想(コピー) (predict-output)
  problem193,
  // if が2つ、1つだけ当てはまる、出力予想 (predict-output)
  problem180,
  // if が2つ、両方当てはまる、出力予想 (predict-output)
  problem181,
  // if/elseでifに当てはまる、出力予想 (predict-output)
  problem182,
  // if/elifどちらも当てはまらない、if後の単独printのみ出力、出力予想 (predict-output)
  problem183,
  // if/elif/elif/elseで2個目のelifに当てはまる、出力予想 (predict-output)
  problem184,
  // ifの入れ子(1段)、出力予想 (predict-output)
  problem185,
  // ifの入れ子(2段)、出力予想 (predict-output)
  problem186,
  // ifの入れ子+外側にelse(x=-1版)、出力予想 (predict-output)
  problem188,
  // ifの入れ子の中にif/elif/else、出力予想 (predict-output)
  problem187,
  // 正・ゼロ・負を判定して返す関数を完成(elif穴埋め) (fill-in)
  problem075,


  // 1から5まで表示するwhileループを完成 (fill-in)
  problem189,
  // 合計が10を超えるまで足し続けるプログラムを完成 (fill-in)
  problem078,

  // リスト内包表記で二乗のリスト、出力予想(コピー) (predict-output)
  problem208,

  // リストの中で一番小さい数を予想(負の数版) (predict-output)
  problem171,
  
  
  // ネストしたループ＋if(i!=j版)で表示される数を予想 (predict-output)
  problem170,
  // ネストしたループ＋ifで表示される数を予想(コピー) (predict-output)
  problem207,
  
  // 0から5まで表示 (fill-in)
  problem088,

  // celsius_to_fahrenheit(c) — 摂氏を華氏に変換する関数を完成 (fill-in)
  problem087,
  // sum_list(nums) — リストの合計を返す関数を完成 (fill-in)
  problem089,
  
  
  // リスト内の正の数の個数を返す (fill-in)
  problem090,
  // 1から10の合計を求めて表示するプログラムを書く (fill-in)
  problem093,
  // 「Hello, World!」と表示するプログラムを書く (fill-in)
  problem094,
  // 5から1までカウントダウンするプログラムを書く (fill-in)
  problem095,
  // 1から5の二乗を順に表示するプログラムを書く (fill-in)
  problem096,
  // 1から15のうち3の倍数を表示するプログラムを書く (fill-in)
  problem097,
  // double(n) — 引数の2倍を返す関数を作る (fill-in)
  problem098,
  // 数字が偶数なら「even」、奇数なら「odd」という文字を返す関数を作る (fill-in)
  problem099,
  
  
  
  // andで両方の条件を確認、出力予想 (predict-output)
  problem219,
  // orでどちらか一方の条件を確認、出力予想 (predict-output)
  problem220,
  // notで条件を反転、出力予想 (predict-output)
  problem221,
  // n%2==0 and n>0でTrueになるよう演算子を穴埋め (fill-in)
  problem222,
  
  // fizzbuzz(n) — FizzBuzzを判定する関数を作る (fill-in)
  problem100,


];
