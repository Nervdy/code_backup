// 求最大公约数
function greatestCommonDivisor(a,b){
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  let i = min
  while(i > 0) {
    if (min%i === 0 && max%i === 0) {
      return i
    }
    i--
  }
  return 1
}

console.log(greatestCommonDivisor(8, 12)) //4
console.log(greatestCommonDivisor(8, 16)) //8
console.log(greatestCommonDivisor(8, 17)) //1
console.log(greatestCommonDivisor(12, 9)) //3