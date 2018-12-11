/**
 * link: https://leetcode.com/problems/toeplitz-matrix/description/
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let row = matrix[0]
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i].slice(1).toString() !== row.slice(0, -1).toString()) return false
    row = matrix[i]
  }
  return true
}

console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]))