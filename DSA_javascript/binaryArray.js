// QUESTION:
// Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

// EXAMPLE 1:
// Input: nums = [1,0,0,0,1,0,0,1], k = 2
// Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.

// EXAMPLE 2:
// Input: nums = [1,0,0,1,0,1], k = 2
// Output: false
// Explanation: The second 1 and third 1 are only one place away from each other.


let nums = [1, 0, 0, 0, 1, 0, 0, 1];
let k = 2;
var kLengthApart = function (nums, k) {
    let prevIndex = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (prevIndex !== -1 && i - prevIndex - 1 < k) {
                return false;
            }
            prevIndex = i
        }
    }
    return true;
};
kLengthApart(nums, k)