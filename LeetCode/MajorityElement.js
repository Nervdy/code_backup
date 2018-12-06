/**
 * link: https://leetcode.com/problems/majority-element/description/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort()
  let record = [undefined, 0], count = 0, prev = nums[0]
  
  for (let num of nums) {
    if (num === prev) {
      count++
    } else {
      if (count > record[1])
        record = [prev, count]
      count = 1
    }
    prev = num
  }
  if (count > record[1])
    record = [prev, count]
  return record[0]
}


console.log(majorityElement([2,2,1,1,1,2,2]))