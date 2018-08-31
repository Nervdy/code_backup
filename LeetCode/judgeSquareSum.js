/**
 * see: https://leetcode.com/problems/sum-of-square-numbers/description/
 * @param {number} c
 * @return {boolean}
 */
// 64ms
var judgeSquareSum = function(c) {
  let count = 0
  for (;(count*count) <= c; count++) {
    if (Number.isInteger(Math.sqrt(c - (count * count)))) return true
  }
  return false
};

// 60ms
var judgeSquareSum = function(c) {
  let max = c ** 0.5
 for (let i = 0; i <= max; i++) {
     let b = (c - i ** 2) ** 0.5
     if (Number.isInteger(b)) return true
 }
 return false
};

console.log(judgeSquareSum(5))
