/**
 * link: https://leetcode.com/problems/find-common-characters/
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let result = []
  let firstWord = A[0].split('')
  let matrix = A.slice(1).map(i => i.split(''))
  firstWord.forEach(char => {
    let includeAllMatrix = true
    for (let item of matrix) {
      let indexof = item.indexOf(char)
      if (indexof === -1) {
        includeAllMatrix = false
        break
      } else {
        item.splice(indexof, 1)
      }
    }
    if (includeAllMatrix) {
      result.push(char)
    }
  })
  return result
}

let a = commonChars(["cool","lock","cook"])

console.log(a)