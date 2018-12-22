function EightQueens() {
  let total = 0
  const matrix = new Array(8).fill(null)
  for (let i in matrix) matrix[i] = new Array(8).fill(0)

  function check(row, col) {
    // 行
    if (matrix[row].includes(1)) return false
    // 列
    if (!matrix.every(row => row[col] === 0)) return false
    // 对角线
    for (let r = row-1,c = col-1;r >= 0 && c >= 0; r--, c--) {
      if (matrix[r][c] === 1) return false
    }
    for (let r = row-1,c = col+1;r >= 0 && c < 8;r--, c++) {
      if (matrix[r][c] === 1) return false
    }
    return true
  }

  ;(function findQueens(row) {
    if (row > 7) {
      total++
      return
    }

    for (let i = 0; i < 8; i++) {
      if (check(row, i)) {
        matrix[row][i] = 1
        findQueens(row + 1)
        matrix[row][i] = 0
      }
    }
  }(0))

  return total
}

console.log(EightQueens())