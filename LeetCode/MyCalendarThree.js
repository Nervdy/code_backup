/**
 * link: https://leetcode.com/problems/my-calendar-iii/description/
 */
var MyCalendarThree = function() {
  this.registry_books = []
};

MyCalendarThree.createNew = function() {
  return new MyCalendarThree()
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
  this.registry_books[start] = this.registry_books[start] ? ++this.registry_books[start] : 1
  this.registry_books[end] = this.registry_books[end] ? --this.registry_books[end] : -1

  let active = 0,ans = 0
  for (let x in this.registry_books) {
    active += this.registry_books[x]
    if (active > ans) ans = active
  }
  return ans
};
/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = Object.create(MyCalendarThree).createNew()
 * var param_1 = obj.book(start,end)
 */




 //
function item(date, count, next) {
  return { date, count, next };
}

// 将item放到after后面
function insert(after, item) {
  item.next = after.next;
  after.next = item;
  return item;
}

var MyCalendarThree = function() {
  this.head = item(0, 0);
  this.max = 1;
};

/**
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
  let p = this.head;

  // Skip to last element < start
  while (p.next && p.next.date < start) {
    p = p.next;
  }

  // Insert start item after p
  if (p.next && p.next.date > start) {
    p = insert(p, item(start, p.count + 1, p.next));
    this.max = Math.max(p.count, this.max);
  }

  // Increment existing items < end
  while (p.next && p.next.date < end) {
    p = p.next;
    this.max = Math.max(++p.count, this.max);
  }

  if (!p.next) {
    // Append to the end of the list
    if (p.date < start) {
      p = insert(p, item(start, 1));
    }
    insert(p, item(end, 0));
  } else if (p.next.date > end) {
    // Insert end in the middle of the list
    insert(p, item(end, p.count - 1));
  }

  console.log(this.max)
  return this.max;
};





let obj = new MyCalendarThree();
obj.book(10, 20); // returns 1
obj.book(50, 60); // returns 1
obj.book(10, 40); // returns 2
obj.book(5, 15); // returns 3
obj.book(5, 10); // returns 3
obj.book(25, 55); // returns 3