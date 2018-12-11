/**
 * link: https://leetcode.com/problems/sort-array-by-parity-ii/description/
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let result = []
  /**
   * 预设置length速度更快
   */
  result.length = A.length

  let evenIndex = 0
  let oddIndex = 1
  for (let a of A) {
    if (a%2 === 0) {
      result[evenIndex] = a
      evenIndex += 2
    } else {
      result[oddIndex] = a
      oddIndex += 2
    }
  }
  return result
}