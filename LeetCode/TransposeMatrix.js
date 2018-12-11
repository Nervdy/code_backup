/**
 * link: https://leetcode.com/problems/transpose-matrix/description/
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  // 88ms
  // let result = []
  // for (let a of A) {
  //   a.reduce((p, v, i) => {
  //     p[i] ? p[i].push(v) : p[i] = [v]
  //     return p
  //   }, result)
  // }
  // return result

  // 72ms
  let result = []
  for (let a of A) {
    for (let i in a) {
      result[i] ? result[i].push(a[i]) : result[i] = [a[i]]
    }
  }
  return result
}