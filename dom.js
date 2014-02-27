/*
  console.dirを使うと引数に用いたオブジェクトのプロパティがわかる。
  ブラウザ自体もwindowというオブジェクト
*/
console.dir(window);
console.log(window.outerHeight);
//window.location.href = 'http://dotinstall.com'

//window.document - 今開いているページ documentだけでもよい
//document object model(DOM)

var e = document.getElementById('msg');
e.textContent = 'hogehoge';
e.style.color = 'red';
e.className = 'myStyle';

/*
var greet = document.createElement('p'),
    text = document.createTextNode('hello!');
document.body.appendChild(greet).appendChild(text);
greet.className = 'text';
*/
document.getElementById('add').addEventListener('click', function(){
  var greet = document.createElement('p'),
      text = document.createTextNode('hello!');
  document.body.appendChild(greet).appendChild(text);
  greet.className = 'text';
});