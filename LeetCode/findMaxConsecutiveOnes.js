/**
 * link: https://leetcode.com/problems/max-consecutive-ones/
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let arr = nums.join('').split('0')
  return Math.max(arr.map(i => i.length))
}

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))