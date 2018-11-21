// link: https://www.v2ex.com/t/509621#reply15
// 挑战目标：检测 Math 是否被代理
if (Math.random() < 0.5) {
  console.log('hooked')

  self.Math = new Proxy(Math, {
    get(obj, prop) {
      return obj[prop]
    }
  })
}

function bomb() {
  try {
    return bomb()
  } catch (err) {
    try {
      Math.PI
      return false
    } catch (err) {
      return true
    }
  }
}

console.log(bomb())