// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// https://leetcode.com/problems/running-sum-of-1d-array/

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


/* -- Javascript -- */

// if first value of array, just push value to output array
// otherwise push value + last value of output
const runningSum = function (nums) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (i === 0) output.push(num);
      else {
        output.push(num + output[i - 1]);
      }
    }
    return output;
  };

  runningSum([1,2,3,4])

  /* -- TypeScript -- */

  const runningSum2 = function (nums: number[]): number[] {
    let output: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      let num: number = nums[i];
      if (i === 0) output.push(num);
      else {
        output.push(num + output[i - 1]);
      }
    }
    return output;
  };

  runningSum2([1,2,3,4])