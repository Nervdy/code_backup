/**
 * link: https://leetcode.com/problems/available-captures-for-rook/
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let [x, y] = [0, 0]
  label:
  for (let xindex in board) {
    for (let yindex in board[xindex]) {
      if (board[xindex][yindex] === 'R') {
        x = xindex
        y = yindex
        break label
      }
    }
  }
  let xCapture = checkXaxis(board, x, y)
  let yCapture = checkYaxis(board, x, y)
  return xCapture + yCapture
}

function checkXaxis (board, x, y) {
  let result = 0
  let line = board[x]
  for (let i = y; i >= 0; i--) {
    if (line[i] === 'B') break
    if (line[i] === 'p') {
      result++
      break
    }
  }
  for (let i = y; i < line.length; i++) {
    if (line[i] === 'B') break
    if (line[i] === 'p') {
      result++
      break
    }
  }
  return result
}

function checkYaxis (board, x, y) {
  let result = 0
  for (let i = x; i >= 0; i--) {
    if (board[i][y] === 'B') break
    if (board[i][y] === 'p') {
      result++
      break
    }
  }
  for (let i = x; i < board.length; i++) {
    if (board[i][y] === 'B') break
    if (board[i][y] === 'p') {
      result++
      break
    }
  }
  return result
}

let a = [
  [".",".",".",".",".",".",".","."],
  [".","p","p","p","p","p",".","."],
  [".","p","p","B","p","p",".","."],
  [".","p","B","R","B","p",".","."],
  [".","p","p","B","p","p",".","."],
  [".","p","p","p","p","p",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."]
]

let b = numRookCaptures(a)

console.log(b)