/*
https://leetcode.com/problems/reverse-integer/

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

explanation here: https://dev.to/aidiri/x-bit-integers-solving-with-a-range-3gm3

*/

// Refactored - doesn't work on extra large numbers 9646324351

function reverseInteger(x){
    const reverse = (x) => x.toString().split('').reverse().join('')
  
    return (Math.sign(x) === -1) 
        ? (0 - reverse(Math.abs(x))) 
        : Math.abs(reverse(x))
}

// Original
const reverse = function(x) {
    let isNeg = false;
    if (x < 0) {
        isNeg = true;
    }
    let arr = x.toString();
    let string = arr.split('').reverse().join('');
    let newNum = parseInt(string, 10);
    if (newNum > (Math.pow(2, 31) - 1)) {
        newNum = 0;
    };
    if (isNeg === true) {
      newNum = -Math.abs(newNum); 
    }
    return newNum;
};