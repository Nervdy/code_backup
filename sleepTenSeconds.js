// link：https://www.v2ex.com/t/510015#reply14
// 挑战目标：让函数 f 运行 10s 以上，代码越短越好
function f() {
  // 在此写入你的代码：
  // ...
  let t = Date.now() + 10001
  while(Date.now() < t){}
}

(function() {
  var now = Date.now;
  var t1 = now();
  f();
  var t2 = now();
  console.log(t2 - t1 > 10000);
})();