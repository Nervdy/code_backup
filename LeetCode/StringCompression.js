/**
 * link: https://leetcode.com/problems/string-compression/description/
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let prev = chars[0], count = 0, index = 0
  
  while(index <= chars.length) {
    if (chars[index] == prev) {
      count++
    } else {
      if (count > 1) {
        let countArr = count.toString().split('')
        chars.splice(index-count+1, count-1, ...countArr)
        index += (-(count-1) + countArr.length)
      }

      prev = chars[index]
      count = 1
    } 
    index++
  }
  return chars.length
}

// console.log(compress(["a"]))
// console.log(compress(["a","a","b","b","c","c","c"]))
console.log(compress(["a","a","a","a","b","b","b","b","b","b","b","b","b","b","b","b"]))