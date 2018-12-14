/**
 * link: https://leetcode.com/problems/fair-candy-swap/description/
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  let sum = (p, v) => {
    p += v
    return p
  }
  let aSum = A.reduce(sum, 0)
  let bSum = B.reduce(sum, 0)

  let diff = aSum - bSum

  
}

// 遍历元素计算差值，判断是否能补全总和为相等
// A = [1,1], B = [2,2]

// 2  4

// 2 - 1 = 1

// 2 + 1 === 4 - 1