/**
 * link: https://leetcode.com/problems/count-and-say
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let result = '1'
  
  for (let i = 1; i < n; i++) {
    result = result.split('')
    let countArr = []
    for (let index in result) {
      if (!countArr[countArr.length - 1] || countArr[countArr.length - 1].number !== result[index]) {
        countArr.push({number: result[index], count: 1})
      } else {
        countArr[countArr.length - 1].count += 1
      }
    }
    result = ''
    for (let item of countArr) {
      result += item.count+item.number
    }
  }
  return result
}

console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
console.log(countAndSay(4))
console.log(countAndSay(5))