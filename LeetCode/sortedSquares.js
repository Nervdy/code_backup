/**
 * link: https://leetcode.com/problems/squares-of-a-sorted-array/
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.sort((a, b) => Math.abs(a) - Math.abs(b)).map(i => Math.abs(i) * Math.abs(i))
}