/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  stones.sort((a, b) => b - a)
  while (stones.length > 1) {
    let num = stones[0] - stones[1]
    stones.splice(0, 2)
    if (num !== 0) {
      stones.push(Math.abs(num))
      stones.sort((a, b) => b - a)
    }
  }
  return stones[0] || 0
};

console.log(
  lastStoneWeight([2,7,4,1,8,1])
)

console.log(
  lastStoneWeight([7,6,7,6,9])
)