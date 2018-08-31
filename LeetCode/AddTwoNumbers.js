/**
 * see: https://leetcode.com/problems/add-two-numbers/description/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  function formatNumber(link) {
    let str = ''
    ;(function exec(link) {
      str += link.val
      return link.next !== null ? exec(link.next) : ''
    }(link))
    return str.split('').map(i => Number(i))
  }
  function calculation(arr1, arr2) {
    let result = []
    let forword = null
    for (let i=0; i < arr1.length || i < arr2.length; i++) {
      let val = (arr1[i] || 0) + (arr2[i] || 0)
      if (forword == 1) {
        val += 1
        forword = null
      }
      if (val >= 10) forword = 1
      result.push(val >= 10 ? val%10 : val)
    }
    if (forword) result.push(1)
    return result
  }

  return calculation(formatNumber(l1), formatNumber(l2))
}
