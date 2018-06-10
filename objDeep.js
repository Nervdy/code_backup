const a = {
  a: [
    {
      c: {
        d: []
      }
    }
  ]
}


function deep (obj) {
  if (typeof obj !== 'object') {
    return 0
  }
  let deepArr = []

  function exec (obj, depth) {
    
    let hasObj = false
    for (let key in obj) {
      if (typeof obj[key] == 'object') {
        exec(obj[key], depth + 1)
        hasObj = true
      }
    }
    if (!hasObj) deepArr.push(depth)
  }

  exec(obj, 1)
  console.log(deepArr)
  return deepArr.reduce((prev, item) => item > prev ? item : prev,0)
}

console.log(deep(a))