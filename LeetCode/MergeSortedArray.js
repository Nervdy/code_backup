/**
 * link: https://leetcode.com/problems/merge-sorted-array/description/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m)
  for (let i = 0; i < (m + n); i++) {
    if (nums1[i] >= nums2[0] || typeof nums1[i] == 'undefined') {
      nums1.splice(i, 0, nums2.shift())
    }
  }
}

// 52ms
var merge = function(nums1, m, nums2, n) {
  let a = m - 1
  let b = n - 1
  let c = nums1.length - 1

  while (b >= 0) {
    if (nums1[a] > nums2[b]) {
      [nums1[a], nums1[c]] = [nums1[c], nums1[a]]
      a--
    } else {
      nums1[c] = nums2[b]
      b--
    }
    c--
  }
}

// test
const assert = require('assert')

let nums1 = [1, 2, 3, 0, 0, 0], m = 3
let nums2 = [2, 5, 6], n = 3

let nums3 = [2,0]
merge(nums1, m, nums2, n)
// merge(nums3, 1, [1], 1)
assert.deepEqual([1, 2, 2, 3, 5, 6], nums1)
// assert.deepEqual([1, 2], nums3)

console.log(nums1)
