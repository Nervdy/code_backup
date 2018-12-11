/**
 * link: https://leetcode.com/problems/reshape-the-matrix/description/
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  if (nums.length * nums[0].length !== r * c) return nums
  let result = []
  result.length = r
  nums = [].concat(...nums)
  for (let i in new Array(r).fill(null)) {
    i = Number(i)
    result[i] = nums.slice(i*c, (i+1)*c)
  }
  return result
}

console.log(matrixReshape([[1,2], [3,4]], 1, 4))