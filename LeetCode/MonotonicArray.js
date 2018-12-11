/**
 * link: https://leetcode.com/problems/monotonic-array/description/
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  let increasing = A[0] < A[A.length-1] ? true : false
  let prev = A[0]
  for (let a of A) {
    if (increasing && (prev > a)) return false
    if (!increasing && (prev < a)) return false
    prev = a
  }
  return true
}

console.log(isMonotonic([1,3,2]))