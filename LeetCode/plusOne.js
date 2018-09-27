/**
 * link: https://leetcode.com/problems/plus-one/description/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // return String(Number(digits.join('')) + 1).split('').map(i => Number(i))
  digits[digits.length - 1] = digits[digits.length - 1] + 1
  return digits
}

// test
const assert = require('assert')
let digits1 = [1, 3, 5, 6]
let digits2 = [1, 2, 3]
let digits3 = [4, 3, 2, 1]
let digits4 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

assert.deepEqual([1, 3, 5, 7], plusOne(digits1))
assert.deepEqual([1, 2, 4], plusOne(digits2))
assert.deepEqual([4, 3, 2, 2], plusOne(digits3))
assert.deepEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4], plusOne(digits4))
