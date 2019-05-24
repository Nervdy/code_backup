/**
 * link: https://leetcode.com/problems/fibonacci-number/
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  let index = 1
  if (N <= index) return N
  let [a, b] = [0, 1]
  while (index < N) {
    [a, b] = [b, a + b]
    index++
  }
  return b
}