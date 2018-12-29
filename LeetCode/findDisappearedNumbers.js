/**
 * link: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
// 7804 ms  待优化
var findDisappearedNumbers = function (nums) {
  let result = []
  for (let i in nums) {
    if (!nums.includes(Number(i)+1)) 
      result.push(Number(i)+1)
  }
  return result
}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))