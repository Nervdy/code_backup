var zigzagLevelOrder = function(root) {
  if (root == null) return []
  let result = []
  let queue = []
  let depth = 0

  queue.push(root)
  while (queue.length > 0) {
    let odd = ++depth%2 == 1

    let size = queue.length
    let arr = []

    while (size--) {
      if (odd) {
        let node = queue.shift()
        arr.push(node.val)

        if (node.left !== null)
          queue.push(node.left)
        if (node.right !== null)
          queue.push(node.right)
      } else {
        let node = queue.pop()    
        arr.push(node.val)

        if (node.right !== null)
          queue.unshift(node.right)
        if (node.left !== null)
          queue.unshift(node.left)
      }
    }

    result.push(arr)

  }
  return result
}


let root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

console.log(zigzagLevelOrder(root))
