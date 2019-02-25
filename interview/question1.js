/**
 * 解析库位信息字符串，并返回数组，数组元素为详细库位信息
 * @param {string} warehouseStr 库位信息
 * @returns {Array} 库位详细信息
 */
function parseWarehouse (warehouseStr) {
  function logError (msg) {
    throw new Error(`错误：${msg}`)
  }

  function isValidNumber (val) {
    return !Number.isNaN(Number(val))
  }

  if (!warehouseStr) {
    logError('请输入库位信息')
  }

  let paramArr = warehouseStr.split('.')
  if (paramArr.length !== 3) {
    logError('格式错误，请以"仓库.区域.编号序列"格式进行完整输入')
  }

  let tempStr = `${paramArr[0]}.${paramArr[1]}.`
  let numberArr = paramArr[2].split(',')
  let result = []

  numberArr.forEach(item => {
    if (/^\d+-\d+$/.test(item)) {
      let [start, end] = item.split('-').map(i => Number(i))
      while (start <= end) {
        result.push(tempStr + start)
        start++
      }
    } else if (isValidNumber(item)) {
      result.push(tempStr + item)
    } else {
      logError('编号序列错误，请以"1-3,5,7"格式样例进行输入')
    }
  })

  return result
}

console.log(parseWarehouse('上海一库.东区.13-15'))
console.log(parseWarehouse('上海一库.西区.1-3,5,7,9-11'))