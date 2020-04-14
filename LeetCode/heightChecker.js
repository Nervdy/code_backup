/**
 * link: https://leetcode.com/problems/height-checker/
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let sorted = [...heights].sort((a, b) => a - b)
  let result = 0
  for (let i in sorted) {
    if (sorted[i] !== heights[i]) result++
  }
  return result
}

console.log(heightChecker([1,1,4,2,1,3]))