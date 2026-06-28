import type { Problem } from './types';
import problem195 from './problem195';
import problem202 from './problem202';
import problem040 from './problem040';
import problem129 from './problem129';
import problem130 from './problem130';
import problem041 from './problem041';
import problem131 from './problem131';
import problem132 from './problem132';
import problem133 from './problem133';
import problem134 from './problem134';
import problem135 from './problem135';
import problem043 from './problem043';
import problem205 from './problem205';
import problem206 from './problem206';
import problem046 from './problem046';
import problem047 from './problem047';
import problem048 from './problem048';
import problem168 from './problem168';
import problem209 from './problem209';
import problem082 from './problem082';
import problem083 from './problem083';
import problem084 from './problem084';
import problem085 from './problem085';
import problem086 from './problem086';
import problem091 from './problem091';
import problem092 from './problem092';
import problem196 from './problem196';
import problem166 from './problem166';
import problem169 from './problem169';
import problem167 from './problem167';
import problem136 from './problem136';
import problem137 from './problem137';
import problem138 from './problem138';
import problem212 from './problem212';
import problem174 from './problem174';
import problem175 from './problem175';
import problem176 from './problem176';
import problem177 from './problem177';
import problem199 from './problem199';
import problem218 from './problem218';
import problem178 from './problem178';
import problem179 from './problem179';


// セット5（中上級：関数・多テスト）
export const problemSet05: Problem[] = [
  // リストの単語をスペースで結合した結果を予想 (predict-output)
  problem043,
  // -7の絶対値を予想(コピー) (predict-output)
  problem205,
  // リストに2が何個含まれているか予想 (predict-output)
  problem047,
  // 文字列に「World」が含まれているか確認、結果を予想 (predict-output)
  problem048,

  // リスト内包表記で二乗のリスト(変数名sq版)、出力予想 (predict-output)
  problem168,
  // リストの中で一番小さい数を予想(コピー) (predict-output)
  problem209,
  // sum()でリストの合計、出力予想(コピー) (predict-output)
  problem202,

  // stripで前後の空白を取り除く、出力予想 (predict-output)
  problem040,
  // stripで前後の空白を取り除く、出力予想 (predict-output)
  problem129,
  // 前後の空白を取り除くメソッドを穴埋め (fill-in)
  problem130,

  // range(n)は0からn-1までの数字、出力予想(コピー) (predict-output)
  problem195,
  // 1から5まで順に表示するプログラムを書く (fill-in)
  problem091,

  // range(1,10,2)の出力予想(変数名n版) (predict-output)
  problem167,

  // forループで1〜3の合計を求める、結果予想(コピー) (predict-output)
  problem196,
  // forループでi*10を表示、出力予想 (predict-output)
  problem166,
  // 2から4の二乗の合計を計算、穴埋め (fill-in)
  problem169,

  // 1,4,7と表示するプログラムを完成 (fill-in)
  problem136,
  // 1,3,5,7と表示するプログラムを完成 (fill-in)
  problem137,
  // 5,7,9と表示するプログラムを完成 (fill-in)
  problem138,

  // range(1,11)の合計、出力予想(コピー) (predict-output)
  problem206,
  // リストの合計が15になるよう数字を穴埋め(コピー) (fill-in)
  problem212,

  // forループ内のifで偶数だけ表示、出力予想(コピー) (predict-output)
  problem199,
  // 出力が1,3になるようif文の条件を穴埋め(コピー) (fill-in)
  problem218,
  // 2から10までの偶数を表示するプログラムを書く (fill-in)
  problem092,


  // sorted()で昇順に並べ替え、出力予想 (predict-output)
  problem041,
  // sorted(reverse=True)で降順に並べ替え、出力予想 (predict-output)
  problem131,
  // 降順にするためreverse=の値を穴埋め (fill-in)
  problem132,
  // numsを昇順に並べ替えて表示するプログラムを完成 (fill-in)
  problem133,
  // 2番目に小さい数字を求めるプログラムを完成 (fill-in)
  problem134,
  // sorted()に文字列を渡したときの結果を予想 (predict-output)
  problem135,
  
  

  // minus(a,b) — 引数の引き算を返す関数、出力予想 (predict-output)
  problem178,
  // add(a,b) — 2数の合計を返す関数を完成 (fill-in)
  problem082,
  // is_late(minutes) — 20分超ならTrue、以内ならFalseを返す関数、出力予想 (predict-output)
  problem179,
  // is_even(n) — 偶数判定(True/False)を返す関数を完成 (fill-in)
  problem083,
  // is_positive(n) — 正の数判定(True/False)を返す関数を完成 (fill-in)
  problem084,
  // max_of_two(a,b) — 2数の大きい方を返す関数を完成 (fill-in)
  problem085,
  // greet(name) — 「こんにちは、〇〇！」と表示する関数を完成 (fill-in)
  problem086,

  
  // ネストしたループ(if無し、print(f"{i} {j}"))で表示される文字列を予想 (predict-output)
  problem176,
  // ネストしたループ(if無し、print(j))で表示される数を予想 (predict-output)
  problem174,
  // ネストしたループ(if無し、print(i))で表示される数を予想 (predict-output)
  problem175,
  // ネストしたループ(if無し、print(i*10+j))で表示される数を予想 (predict-output)
  problem177,
  // ネストしたループ＋ifで表示される数を予想 (predict-output)
  problem046,
];
