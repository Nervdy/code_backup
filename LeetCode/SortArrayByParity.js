/**
 * link: https://leetcode.com/problems/sort-array-by-parity/description/
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let result = []
  for (let a of A) {
    if (a%2 === 0)
      result.unshift(a)
    else
      result.push(a)
  }
  return result
}


console.log(sortArrayByParity([3,1,2,4]))