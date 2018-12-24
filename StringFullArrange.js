// input： ‘abc’ output： ‘abc’, 'acb', 'bac', 'bca'...


// function StringFullArrange(input) {
//   if (input.length === 1) return [input]
//   let result = []

//   for (let index in input) {
//     let str = input[index]
//     let spliceStr = input.split('')
//     spliceStr.splice(index, 1)
//     spliceStr = spliceStr.join('')
//     let arrange = []

//     arrange = arrange.concat(StringFullArrange(spliceStr))
//     result = result.concat(arrange.map(i => str + i))
//   }

//   return result
// }

function StringFullArrange(input) {
  input = input.split('')
  if (input.length === 1) return input
  let result = []

  for (let index in input) {
    let str = input[index]
    let tempStr = [...input]
    tempStr.splice(index, 1)

    let arrange = StringFullArrange(tempStr.join(''))

    result = result.concat(arrange.map(i => str + i))
  }

  return result
}

console.log(StringFullArrange('abc'))