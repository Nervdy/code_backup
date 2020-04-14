/**
 * @param {number} n
 * @return {number}
 */
// 未完成
var climbStairs = function(n) {
  let result = 0
  function exec (n) {
    if (n <= 0) {
      result++
      return
    }
    exec(n - 1)
    if (n > 1) {
      exec(n - 2)
    }
  }
  exec(n)
  return result
}

function fn1 (n) {
  let result = 0
  function exec (n) {
    if (n <= 0) {
      result++
      return
    }
    exec(n - 1)
    if (n > 1) {
      exec(n - 2)
    }
  }
  exec(n)
  return result
}

// function fn2 (n) {
//   function exec (i, n) {
//     if (i > n) return 0
//     if (i == n) return 1
//     return exec(i + 1, n) + exec(i + 2, n)
//   }
//   return exec(0, n)
// }

function fn3 (n) {
  let result = new Array(n + 1)
  result[1] = 1
  result[2] = 2
  for (let i = 3; i < result.length; i++) {
    result[i] = result[i - 1] + result[i - 2]
  }
  return result[n]
}

console.time('fn1')
console.log(fn1(44))
console.timeEnd('fn1')

// console.time('fn2')
// console.log(fn2(44))
// console.timeEnd('fn2')

console.time('fn3')
console.log(fn3(44))
console.timeEnd('fn3')