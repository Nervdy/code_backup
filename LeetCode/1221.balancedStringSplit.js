/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let amount = 0
  let num = 0
  for (let i of s) {
    if (i === 'R') {
      num++
    } else if (i === 'L') {
      num--
    }
    if (num === 0) amount++
  }
  return amount
};