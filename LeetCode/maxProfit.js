/**
 * link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0
  let profit = 0, lastIndex = 0, increase = prices[0] < prices[1] ? true : false
  for (let i=1; i < prices.length; i++) {
    let prevIndex = i - 1
    if (increase) {
      if (prices[prevIndex] > prices[i]) {
        increase = !increase
        profit += prices[prevIndex] - prices[lastIndex]
        lastIndex = prevIndex
      }
    } else {
      if (prices[prevIndex] < prices[i]) {
        increase = !increase
        lastIndex = prevIndex
      }
    }
  }
  if (increase) profit += prices[prices.length-1] - prices[lastIndex]
  return profit
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1,2,3,4,5]))
console.log(maxProfit([7,6,4,3,1]))