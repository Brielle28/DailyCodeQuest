
// Write a function that takes two numbers and returns their difference.
function numDifference (a, b) {
    return a - b
}
const nums = numDifference(10, 5)
console.log(nums)


// Write a function that returns true if a number is positive and false otherwise
function numNature (n){
    if (n > 0) {
        return true
    };
    return false
}
console.log(numNature(5))
console.log(numNature(-3))

// Write a function that accepts a list of 
// numbers and returns the largest number in the list.
function arr ([...args]){
    return Math.max(...args)
}
console.log(arr([1,2,3,4,5,10,19,249]))

function love (n) {
    if (n === 2) {
        console.log("i love clara")
    }
    return; 
}
console.log(love(2))