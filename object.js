/*
  オブジェクト：
    名前と値
*/

var user = {
  email: "taneichi@gmail.com", //プロパティ
  score: 80 //プロパティ
};

console.log(user["email"]);
console.log(user.score);
user.score = 100;
console.log(user);

var hoge = {
  email: "taneichi@gmail.com", //プロパティ
  score: 80, //プロパティ
  greet: function(name) {
    console.log("hello," + name + " from " + this.email);
  }//メソッド
};

hoge.greet("Tom");

/*
組み込みオブジェクトついて

  - String
  - Array
  - Math
  - Date

  MDNで確認
*/

var s = new String("taneichi Junpei");
console.log(s.length);
console.log(s.replace("t","T"));
console.log(s.substr(1,3));

var a = new Array(100, 300, 200);
console.log(a.length);
//unshift -> array <- push
//shift <- array -> pop
//splice(削除したい部分,個数)
a.push(500);
console.log(a);
a.splice(1,2,200,300,400);
console.log(a);

