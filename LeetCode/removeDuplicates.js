/**
 * link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let set = new Set(nums)
  let index = 0
  for (let i of set.keys()) {
    nums[index++] = i
  }
  return set.size
}

// test
const assert = require('assert')
let nums1 = [1,1,2]
let nums2 = [0,0,1,1,1,2,2,3,3,4]

assert.strictEqual(2, removeDuplicates(nums1))
assert.strictEqual(5, removeDuplicates(nums2))

console.log(nums1)
console.log(nums2)