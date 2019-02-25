/**
 * 生成一组长度为1到10之间的随机数数组
 * @returns {Array} 包含随机数的数组
 */
function generateRandomArr () {
  let length = parseInt(Math.random() * 10) || 1
  let result = []
  result.length = length

  for (let i = 0; i < length; i++) {
    result[i] = parseInt(Math.random() * 100) || 1
  }
  return result
}

/**
 * 获取一个数组元素的总和
 * @param {Array} array 
 * @returns {number}
 */
function getArraySum (array) {
  return array.reduce((p, v) => p += v, 0)
}

/**
 * 回溯算法获取arr里面和为target的元素
 * @param {number} target 目标数值
 * @param {Array} arr 数组
 * @returns {Array} 包含所有结果的数组
 */
function backTrack (target, arr) {
  let result = [], stack = []

  function Recursive (target, index) {  
    if (target === 0) {
      return result.push(stack.slice())
    }
    if (target < 0) return
    if (index === arr.length) return

    stack.push(arr[index])
    Recursive(target - arr[index], index + 1)
    stack.pop()
    
    Recursive(target, index + 1)
  }

  Recursive(target, 0)

  return result
}

/**
 * 穷举目标中数字的和与源中数字的和一致的元素
 * @param {Array} source 源
 * @param {Array} target 目标
 * @returns {Array} 格式：[{source: [1,2], target: [3]}]  source与target的元素之和相等
 */
function getEqualSumElement (source, target) {
  let result = []

  for (let i = 0; i < source.length; i++) {
    let tempSource = source.slice(i, source.length)

    for (let j = 1; j <= tempSource.length; j++) {
      let tempArr = tempSource.slice(0, j)
      let sum = getArraySum(tempArr)
      let backTrackResult = backTrack(sum, target)

      backTrackResult.forEach(item => {
        result.push({
          source: tempArr,
          target: item
        })
      })
    }
  }

  return result
}




// 测试
let result = getEqualSumElement(
  [19, 47, 20, 78, 23],
  [13, 6, 14, 23, 33, 31, 10]
)

console.log(result)

console.log('\n\n')




let source = generateRandomArr()
let target = generateRandomArr()

console.log('source: ', source)
console.log('target: ', target)

let result2 = getEqualSumElement(source, target)

console.log(result2)