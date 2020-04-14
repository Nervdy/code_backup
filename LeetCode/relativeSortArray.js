/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let countObj = {}
  arr1.forEach(item => {
    countObj[item] = countObj[item] ? countObj[item]++ : 1
  })
  arr2.reduce((p, v) => {
    
  }, [])
}

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))
