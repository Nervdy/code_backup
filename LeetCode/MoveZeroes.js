/**
 * link: https://leetcode.com/problems/move-zeroes/description/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 92ms
var moveZeroes = function(nums) {
  let index = nums.length - 2
  while (index >= 0) {
    if (nums[index] == 0) {
      nums.splice(index, 1)
      nums.push(0)
    }
    index--
  }
}

// 60ms
var moveZeroes = function(nums) {
  let index = 0, length = nums.length
  while (index < length) {
    if (nums[index] === 0) {
      nums.splice(index, 1)
      nums.push(0)
      index--
      length--
    }
    index++
  }
}

let arr = [0,1,0,3,12]
moveZeroes(arr)
console.log(arr)
