/**
 * link: https://leetcode.com/problems/valid-parentheses/description/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const left_char = ['(', '{', '[']
  const right_char = [')', '}', ']']
  if (right_char.includes(s[0])) return false
  let stack = []
  s = s.split('')
  for (let char of s) {
    let left_index = left_char.indexOf(char)
    if (left_index !== -1) {
      stack.push(left_index)
    } else if (stack.pop() !== right_char.indexOf(char)) {
      return false
    }
  }
  if (stack.length > 0) return false
  return true
}

console.log(isValid("()[{}"))