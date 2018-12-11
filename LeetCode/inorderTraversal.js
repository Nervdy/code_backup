/**
 * link: https://leetcode.com/problems/binary-tree-inorder-traversal/description/
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
var inorderTraversal = function (root) {
  // TODO

  
  let stack = [], result = [], deep = true
  while (root) {
    if (deep === false && stack.length === 0) break 
    if (root.left === null || deep === false) {
      result.push(root.val)
      if (root.right !== null) {
        stack.push(root)
        root = root.right
        deep = true
      } else {
        root = stack.pop()
        deep = false
      }
    } else {
      stack.push(root)
      root = root.left
      deep = true
    }
  }
  return result
}


// let a = inorderTraversal({
//   val: 1,
//   left: null,
//   right: {
//     val: 2,
//     left: {
//       val: 3,
//       left: null,
//       right: null
//     },
//     right: null
//   }
// })
let b = inorderTraversal({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: null
})

// console.log(a)
console.log(b)