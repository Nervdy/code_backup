/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.nums = nums.sort((a, b) => b - a).slice(0, k)
  this.k = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.nums.length < this.k) {
    if (this.nums.length === 0 || this.nums[this.nums.length - 1] > val) {
      this.nums.push(val)
    }
  }
  for (let i in this.nums) {
    if (this.nums[i] <= val) {
      this.nums.splice(i, 0, val)
      break
    }
  }
  console.log(this.nums[this.k-1])
  return this.nums[this.k-1]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
["KthLargest","add","add","add","add","add"]
[[2,[0]],[-1],[1],[-2],[-4],[3]]

var obj = new KthLargest(2, [0])
var param_1 = obj.add(-1)
var param_1 = obj.add(1)
var param_1 = obj.add(-2)
var param_1 = obj.add(-4)
var param_1 = obj.add(3)

// var obj = new KthLargest(3, [4,5,8,2])
// var param_1 = obj.add(3)
// var param_1 = obj.add(5)
// var param_1 = obj.add(10)
// var param_1 = obj.add(9)
// var param_1 = obj.add(4)