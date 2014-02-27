/*
  関数： 複数の処理

  function 関数名(){
    処理
  }

  関数内で定義した変数は
  関数内で死ぬ（ローカル変数）
*/

function message(msg){
  alert(msg);
}

function kaeriti(hoge){
  return hoge;
}

//関数の別の書き方(無名関数)
var hello = function(name){
  var msg = "hello" + name;
  return msg;
};

//即時関数 他の人が定義した変数と干渉しない
(function hello(name) {
  console.log("hello" + name);
})("tom");

(function (name) {
  console.log("hello" + name);
})("tom");


