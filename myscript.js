/*
  変数: データにつけるラベル　
  データ型
  - 文字列
  - 数値
  - 真偽値(true / false)
  - オブジェクト
    - 配列
    - 関数
    - 組み込みオブジェクト
  - undefined 定義されていないもの
  - null 何も無い
  数値:
    10
    2.5
    -2.5
  演算子:
    + - * / %
    += 代入を伴う演算子
    ++ -- 単項演算子
*/


console.log("javascript mdn");

var msg = "変数を使ってみたよ";

console.log(msg);

var x;
  x = 10 * 5;
  console.log(x);
  x += 50;
  console.log(x);
  console.log("100");
/*
  文字列
    表現方法
    特殊文字
  演算子
*/

var s;
s = "hello\n\'world!\'.";
console.log(s);
t = "\n\tonakahettayo";
string = s + t;
console.log(string);

/* 文字列と数値の足し算などの場合は数値が文字列として扱われる*/

var gattai;
  gattai = "5" + 5;
console.log(gattai);
/*
  条件分岐
  if(条件){
    true
  } else {
    false
  }
*/

var score = 40;
if(score < 30){
  console.log("small");
}else if (score === 30){
  console.log("pittari");
}else{
  console.log("big");
}
/*
  === は == でもいいが
  前者の方が厳密に計算してくれる

  論理演算子
   AND &&
   OR ||
   NOT !

   真偽値
    文字列：　空文字以外だったらtrue
    数値： 0 か NaN(not a number)以外だったらtrue
    true / false
    object: null 以外 true
    undifined, null -> false
*/

if (x) {
  //処理
}
if (x !== '') {
  //処理
}
/*上は同じ tureかfalseを判別してる*/

/*
  三項演算子
  var a, b, c;
  if (条件) {
    a = b;
  } else {
    a = c;
  }

  はこれと同じ→

  a = (条件) ? b : c;

*/

var max, x, y;
x = 20;
y = 30;
max = (x > y) ? x : y;

console.log(max);

/*
  switch文について
*/

var signal = "hoge";

switch (signal) {
  case "red":
    console.log("stop!");
    break;
  case "yellow":
    console.log("slow down!");
    break;
  case "green":
  case "blue":
    console.log("go!");
    break;
  default:
    console.log("nothing!");
    break;
}