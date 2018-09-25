/**
 * link: https://leetcode.com/problems/remove-element/description/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (let i=0; i < nums.length; i++) {
    if (nums[i] == val) nums.splice(i--, 1)
  }
  return nums.length
}


// test
const assert = require('assert')
let nums1 = [3,2,2,3], val1 = 3
let nums2 = [0,1,2,2,3,0,4,2], val2 = 2

assert.strictEqual(2, removeElement(nums1, val1))
assert.strictEqual(5, removeElement(nums2, val2))

console.log(nums1)
console.log(nums2)