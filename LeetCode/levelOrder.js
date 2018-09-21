/**
 * link: https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 56 ~ 60ms
function order (root) {
  let result = []
  function exec (tree, depth) {
    if (tree == null) return

    result[depth] = result[depth] || []
    result[depth].push(tree.val)

    exec(tree.left, depth + 1)
    exec(tree.right, depth + 1)
  }
  
  exec(root, 0)
  return result
}

// 68ms
// result[depth] ? result[depth].push(tree.val) : result[depth] = [tree.val]

// 52ms
function order (root) {
  var res = [];
  
  function add(node, index){
      if(node){
          res[index] = res[index] || [];
          res[index].push(node.val);
          
          add(node.left, index + 1);
          add(node.right, index + 1);    
      }
  }
  
  add(root, 0);
  return res;
}

// 层序遍历
// 56 ~ 64ms
function order (root) {
  let result = []
  let queue = []

  if (root == null) return []
  queue.push(root)

  while (queue.length !== 0) {
    let len = queue.length
    let arr = []

    while(len--) {
      let h = queue.shift()
      arr.push(h.val)
      
      if (h.left !== null)
        queue.push(h.left)
      if (h.right !== null)
        queue.push(h.right)
    }

    result.push(arr)
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
