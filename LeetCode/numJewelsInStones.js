/**
 * see: https://leetcode.com/problems/jewels-and-stones/description/
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// 56ms myself
var numJewelsInStones = function(J, S) {
  J = J.split('')
  return J.reduce((prev, cur) => {
    let reg = new RegExp('(' + cur + ')', 'g')
    S.replace(reg, () => prev++)
    return prev
  }, 0)
};

// 52ms
var numJewelsInStones = function(J, S) {
  var jewels = 0,
      stones = S.split("");
  for(var i = 0;i < stones.length;i++){
      if(J.indexOf(stones[i]) > -1){
          jewels++;
      }
  }
  return jewels;
};

// 56ms oneline
var numJewelsInStones = function(J, S) {
  return [...S].reduce((p, n) => J.indexOf(n) < 0 ? p : ++p, 0);
};

console.log(numJewelsInStones('aA', 'aAAbbbbb'))
console.log(numJewelsInStones('z', 'ZZ'))
