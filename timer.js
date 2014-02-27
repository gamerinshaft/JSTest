/*
  タイマー処理
    setInterval
      前の処理が終わったかどうか考えずに実行する
      時間ごとにある処理を実行していく
    setTimeout
      時間が来ると一回だけ処理を実行する
      前の処理が終わったら実行される
*/

var i = 1;
function show() {
  var nyan = " ";
  if( i % 5 === 0){
    nyan = " にゃんぱす〜";
  }
  console.log(i++ + nyan);
  var tid = setTimeout(function() {
    show();
  }, 1000);

  if(i > 1000){
    clearTimeout(tid);
  }
}
show();
/*
setInterval(function() {
  show();
}, 1000);
*/
