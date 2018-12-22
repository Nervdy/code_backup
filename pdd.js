// input： ‘abc’ output： ‘abc’, 'acb', 'bac', 'bca'...

function fullArrange(input) {
  let input_arr = input.split('')
  let result = []
  for (let i in input_arr) {
    let first_char = input_arr[i]
    let temp_arr = [...input_arr]
    temp_arr.splice(i, 1)

    if (temp_arr.length === 1) {
      result.push(first_char + temp_arr.join(''))
    } else {
      result = result.concat(fullArrange(temp_arr.join('')).map(i => first_char + i))
    }
  }
  return result
}


console.log(fullArrange('abc'))


function fullArrange(str) {
  let result = []; const arr = str.split(''); 
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const rest = [...arr];
    rest.splice(i, 1);
    if (rest.length === 0) { 
      result.push(element);
    } else {
      const restResult = fullArrange(rest.join('')); 
      restResult.forEach(s => {
        result.push(element + s);
      });
    }
  } 
  return result;

}