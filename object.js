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