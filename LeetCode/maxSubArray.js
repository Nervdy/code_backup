/**
 * link: https://leetcode.com/problems/maximum-subarray/description/
 * @param {number[]} nums
 * @return {number}
 */
// Time Limit Exceeded
// var maxSubArray = function(nums) {
//   let result = nums[0]

//   function sum (arr) {
//     return arr.reduce((p, i) => p += i, 0)
//   }

//   function findMax (startIndex, nums) {
//     let maxNum = nums[startIndex]
//     for (let i=startIndex+1;i <= nums.length; i++) {
//       let sumNum = sum(nums.slice(startIndex, i))
//       if (sumNum > maxNum) maxNum = sumNum
//     }
//     return maxNum
//   }
//   let date = new Date()
//   for (let i=0; i < nums.length; i++) {
//     // if (nums[i] < 0) continue
//     let maxNum = findMax(i, nums)
//     let newDate = new Date()
//     console.log(newDate - date)
//     date = newDate
//     if (maxNum > result) result = maxNum
//   }
//   return result
// }

var maxSubArray = function(nums) {
  let i = 0, sum = [nums[i]], max = sum[i]
  
  while (++i < nums.length) {
    // sum[i] = nums[i] + (sum[i - 1] > 0 ? sum[i - 1] : 0)
    sum[i] = sum[i - 1] >= 0 ? nums[i] + sum[i - 1] : nums[i]
    max = Math.max(max, sum[i])
  }

  return max
}


// 56ms
var maxSubArray = function(nums) {
  for(let i=1; i < nums.length; i++) {
      nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
  }
  return Math.max(...nums)
}

// test
const assert = require('assert')
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

assert.strictEqual(6, maxSubArray(nums))
assert.strictEqual(-3, maxSubArray([-10, -5, -3]))
assert.strictEqual(-1, maxSubArray([-2,-1]))
assert.strictEqual(3, maxSubArray([1,2]))
// console.log(maxSubArray2(a))    // 11081
// console.log(maxSubArray(a))