// function pollingCheck(fn, delay) {
//   debugger
//   console.log(count)
//   return fn().catch(() => {
//     return delay().then(() => {
//       return pollingCheck(fn, delay)
//     })
//   })
// }

// let count = 0
// pollingCheck(
//   () => {
//     return count++ > 200000 ? Promise.resolve() : Promise.reject()
//   },
//   () => {
//     return Promise.resolve()
//   } //TODO
// ).then(() => console.log('finish'))


// function main(n) {
//   if (n === 0) {
//     return 'finish'
//   } else {
//     return main(n - 1)
//   }
// }

// console.log(main(200000))

// console.log('start');

// setTimeout(() => {          // callback1
//   console.log(111);
//   setTimeout(() => {        // callback2
//     console.log(222);
//   }, 0);
//   setImmediate(() => {      // callback3
//     console.log(333);
//   })
//   process.nextTick(() => {  // callback4
//     console.log(444);  
//   })
// }, 0);

// setImmediate(() => {        // callback5
//   console.log(555);
//   process.nextTick(() => {  // callback6
//     console.log(666);  
//   })
// })

// setTimeout(() => {          // callback7              
//   console.log(777);
//   process.nextTick(() => {  // callback8
//     console.log(888);   
//   })
// }, 0);

// process.nextTick(() => {    // callback9
//   console.log(999);  
// })

// console.log('end');

// console.log('1');

// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })

// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     console.log('8')
// })
// process.nextTick(function() {
//   console.log('6');
// })

// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })



// var examplearr = [8, 94, 15, 88, 55, 76, 21, 39, 1];
// function sortarr(arr) {
//   for (i = 0; i < arr.length - 1; i++) {
//     for (j = 0; j < arr.length - 1 - i; j++) {

//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }

//     }
//   }
//   return arr;
// }
// sortarr(examplearr);
// console.log(examplearr);


// var examplearr = [8, 94, 15, 88, 55, 76, 21, 39, 1];

// function sort (arr) {
//   for (let i=0; i < arr.length; i++) {
//     for (let j=arr.length - 1; j > i; j--) {
//       if (arr[j] < arr[j - 1]) {
//         [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
//       }
//     }
//   }
//   return arr
// }
// console.log(sort(examplearr))


// let arr = [1,2,3,4,5,6,7,8,9]

// let [arr1, arr2, arr3, arr4] = arr.reduce((p, v, i) => {
//   i = i % 4
//   p[i] ? p[i].push(v) : p[i] = [v]
//   return p
// }, [])

// console.log(arr1, arr2, arr3, arr4)


async function doubleAndAdd (a, b) {
  // a = await doubleAfter1Sec(a)
  // b = await doubleAfter1Sec(b)
  [a, b] = await Promise.all([doubleAfter1Sec(a), doubleAfter1Sec(b)])
  return a + b
}

doubleAndAdd(1, 2).then(console.log)

function doubleAfter1Sec (param) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(param * 2)
    }, 1000)
  })
}