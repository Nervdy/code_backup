/**
 * link: https://leetcode.com/problems/search-insert-position/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let index = nums.indexOf(target)
  if (index !== -1) {
    return index
  }
  let i
  for (i=0; i < nums.length; i++) {
    if (nums[i] >= target) return i
  }
  return i
}

// 单一出口原则
var searchInsert = function(nums, target) {
  let index = nums.indexOf(target)
  if (index === -1) {
    index = 0
    for (; index < nums.length; index++) {
      if (nums[index] >= target) break
    }
  }
  return index
}

// test
const assert = require('assert')
let nums = [1,3,5,6]
let val1 = 5, val2 = 2, val3 = 7, val4 = 0

assert.strictEqual(2, searchInsert(nums, val1))
assert.strictEqual(1, searchInsert(nums, val2))
assert.strictEqual(4, searchInsert(nums, val3))
assert.strictEqual(0, searchInsert(nums, val4))
