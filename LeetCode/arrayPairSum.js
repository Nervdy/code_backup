/**
 * link: https://leetcode.com/problems/array-partition-i/description/
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  let result = 0
  for (let i=0; i <= nums.length-2; i+=2) {
    result += Math.min(nums[i], nums[i+1])
  }
  return result
}

console.log(arrayPairSum([11, 41, -9046, 2047, 1118, 8477, 8446, 279, 4925, 7380, -1719, 3855]))
console.log(arrayPairSum([-470, 66, -4835, -5623]))