/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  let amount = new Array(A[0].length).fill(0)
  for (let index in A) {
    if (index === '0') continue
    index = Number(index)
    A[index].split('').forEach((str, strIndex) => {
      if (amount[strIndex] === 1) return
      // if (str.charCodeAt() - A[index - 1][strIndex].charCodeAt() < 0) {
      if (str < A[index - 1][strIndex]) {
        amount[strIndex] = 1
      }
    })
  }
  return amount.reduce((p, v) => p += v, 0)
};