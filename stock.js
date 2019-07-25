// 新浪股票数据接口
// const url = 'http://hq.sinajs.cn/list='

// 腾讯股票数据接口
// https://blog.csdn.net/USTBHacker/article/details/8365756
const url = 'http://qt.gtimg.cn/q='

const stockList = [
  'sh601398',
  'sh601939',
  'sh601288',
  'sh601988',
  'sh600036',
  'sh601328',
  'sh601166',
  'sh600000',
  'sh601998',
  'sh600016'
]

const http = require('http')

getApiContent(url + stockList.join(','))
.then(res => {
  // let stockArr = parseContent(res).sort((a,b) => a.pbratio - b.pbratio)
  let stockArr = parseContent(res).sort((a,b) => a.marketcap - b.marketcap)
  console.log(JSON.stringify(stockArr).replace(/},/g, '\n'))
})

function getApiContent (getUrl) {
  return new Promise((resolve, reject) => {
    http.get(getUrl, res => {
      let resData = ''
      res.setEncoding('utf-8')
      res.on('data', chunk => resData += chunk)
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(resData)
        } else {
          reject('fail: ', res.statusCode)
        }
      })
    })
  })
}

function parseContent (content) {
  let parseResult = []
  let contentArr = content.trim().split(';')
  
  for (const item of contentArr) {
    if (item.length === 0) continue
    let itemArr = item.split('~')
    parseResult.push({
      // 中文乱码
      // name: itemArr[1],
      code: itemArr[2],
      price: itemArr[3],
      marketcap: itemArr[45],  // 总市值
      pbratio: itemArr[46]     // 市净率
    })
  }
  return parseResult
}