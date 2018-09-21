/**
 * link: https://leetcode.com/problems/find-largest-value-in-each-tree-row/description/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  let result = []
  let queue = []

  if (root == null) return []
  queue.push(root)

  while (queue.length !== 0) {
    let len = queue.length
    let max = null

    while(len--) {
      let h = queue.shift()
      if (max == null) {
        max = h.val
      }
      if (!(max > h.val)) {
        max = h.val
      }
      
      if (h.left !== null)
        queue.push(h.left)
      if (h.right !== null)
        queue.push(h.right)
    }

    result.push(max)
  }
  return result   
}

let a = [3,9,20,null,null,15,7]

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

console.log(largestValues(root))
