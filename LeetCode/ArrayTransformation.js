// QUESTION 
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

 

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.
 




// solution 1 ---- my own caved out first solution
const arr = [1, 2, 3];
function plusOne(arr) {
  let newArray = [];
  for (let index = 0; index < arr.length; index++) {
    newArray.push((arr[index] += 1));
  }
  return newArray;
}
console.log(plusOne(arr));

function constant(cons) {
  let newCons = [];
  for (let index = 0; index < cons.length; index++) {
    newCons.push(48);
  }
  return newCons;
}
const cons = [12, 13, 14];
console.log(constant(cons));

function plusI(indexArr) {
  let newIndexArr = [];
  for (let index = 0; index < indexArr.length; index++) {
    newIndexArr.push(indexArr[index] + index);
  }
  return newIndexArr;
}
const indexArr = [11,12,13]
console.log(plusI(indexArr))


//solution 2 ----- leet code solution 
const array = [1,2,3]

function map(array, fn) {
    let newArray = []
    for (let index = 0; index < array.length; index++) {
        newArray.push(fn(array[index], index))    
    }
    return newArray
}

function plusone (n) {
    return n + 1
}

function plusI(n, i) {
    return n + i
}

function constant() {
    return 48
}

console.log(map(array, plusone), "this is plus one")
console.log(map(array, plusI), "this is index plus")
console.log(map(array, constant), "this is constant")