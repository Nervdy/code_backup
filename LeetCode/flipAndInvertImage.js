/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  for (let i in A) {
    A[i] = A[i].reduceRight((p, v) => {
      p.push(Number(!v))
      return p
    }, [])
  }
  return A
}

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))