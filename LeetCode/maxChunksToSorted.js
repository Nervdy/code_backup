/**
 * link: https://leetcode.com/problems/max-chunks-to-make-sorted-ii/
 * @param {number[]} arr
 * @return {number}
 */

// TODO
// var maxChunksToSorted = function (arr) {
//   let increase = arr[0] <= arr[1] ? true : false,
//       decreaseArr = [],
//       chunk = 1
  
//   for (let i = 1; i < arr.length; i++) {

//     if (increase) {
//       if (arr[i - 1] > arr[i]) {
//         increase = false
//       }
//       if (arr[i] > arr[i+1]) continue
//       chunk++
//     } else {
//       if (arr[i - 1] < arr[i]) {
//         increase = true
//         chunk++
//       }
//       decreaseArr.push(arr[i-1])
//     }

//   }

//   return chunk
// }
var maxChunksToSorted = function (arr) {
  let increase = null,
      tempChunk = 0,
      chunk = 1
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1] === arr[i]) {
      if (increase) {
        chunk++
      } else {
        tempChunk++
      }
    }
    if (arr[i-1] < arr[i]) {
      if (increase !== false) {
        chunk += tempChunk
      }
      increase = true
      chunk++
    }
    if (arr[i-1] > arr[i]) {
      increase = false
      tempChunk = 0
    }
  }

  return chunk
}
console.log(maxChunksToSorted([5,4,3,2,1]))   // 1
console.log(maxChunksToSorted([2,1,3,4,4]))   // 4
console.log(maxChunksToSorted([4,2,2,1,1]))   // 1
console.log(maxChunksToSorted([0,0,1,1,1]))   // 5
console.log(maxChunksToSorted([1,0,1,3,2]))   // 3
console.log(maxChunksToSorted([1,1,0,0,1]))   // 2
console.log(maxChunksToSorted([0,3,0,3,2]))   // 2

// var maxChunksToSorted = function (arr) {
//   let n = arr.length
//   let maxOfLeft = new Array(n)
//   let minOfRight = new Array(n)

//   maxOfLeft[0] = arr[0]
//   for (let i = 1; i < n; i++) {
//     maxOfLeft[i] = Math.max(maxOfLeft[i-1], arr[i])
//   }

//   minOfRight[n - 1] = arr[n - 1]
//   for (let i = n - 2; i >= 0; i--) {
//     minOfRight[i] = Math.min(minOfRight[i + 1], arr[i])
//   }

//   let chunk = 0
//   for (let i = 0; i < n - 1; i++) {
//     if (maxOfLeft[i] <= minOfRight[i + 1]) chunk++
//   }
  
//   return chunk + 1
// }