/**
 * link: https://github.com/fulvaz/Faith/issues/6
 * 1~1000里面出现6的次数
 */

function sixCount(max = 1000, num = 6) {
  let max_char = max.toString().split('')
  let digit = 0, count = 0
  for (let i = 0; i < max_char.length-1; i++) {
    digit = digit * 10 || 1
    console.log(digit)
    count = count * 10 + digit
  }
  return count
}

console.log(sixCount())



 
// let count = 0
// let max_char = (max).toString().split('').map(i => Number(i))
// console.log(max_char)
// console.log(max_char[0], 10**max_char.length)