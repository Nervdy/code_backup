/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i - 1][1] >= intervals[i][0]) {
      let first = Math.min(intervals[i - 1][0], intervals[i][0])
      let second = Math.max(intervals[i - 1][1], intervals[i][1])
      intervals.splice(i - 1, 2, [first, second])
      i--
    }
  }

  return intervals
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,4],[4,5]]))
console.log(merge([[1,4],[0,4]]))
console.log(merge([[1,4],[0,0]]))