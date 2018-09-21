/**
 * link: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 1, prev = nums[0]
  for (let j=1; j < nums.length; j++) {
    if (prev == nums[j]) {
      if (i == 2) {
        nums.splice(j--, 1)
      } else {
        i++
      }
    } else {
      prev = nums[j]
      i = 1
    }
  }
  return nums.length
}


// test
const assert = require('assert')
let nums1 = [1,1,1,2,2,3]
let nums2 = [0,0,1,1,1,1,2,3,3]

assert.strictEqual(5, removeDuplicates(nums1))
assert.strictEqual(7, removeDuplicates(nums2))

console.log(nums1)
console.log(nums2)