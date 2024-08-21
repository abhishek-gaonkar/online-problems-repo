/**
Problem Statement:

Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

Example 1:

Input: nums = [-4,-2,1,4,8]
Output: 1
Explanation:
The distance from -4 to 0 is |-4| = 4.
The distance from -2 to 0 is |-2| = 2.
The distance from 1 to 0 is |1| = 1.
The distance from 4 to 0 is |4| = 4.
The distance from 8 to 0 is |8| = 8.
Thus, the closest number to 0 in the array is 1.

Example 2:

Input: nums = [2,-1,1]
Output: 1
Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.
 */

function findClosestNumber(nums: number[]): number {
  let obj = {};
  for (const num of nums) {
    num in obj
      ? obj[Math.abs(num - 0)].push(num)
      : (obj[Math.abs(num - 0)] = [num]);
  }
  let lD = Object.keys(obj).sort((a, b) => parseInt(a) - parseInt(b))[0];
  if (obj[lD].length === 1) {
    return obj[lD][0];
  } else {
    return Math.max(...obj[lD]);
  }
}

console.log(findClosestNumber([2, -1, 1]));
