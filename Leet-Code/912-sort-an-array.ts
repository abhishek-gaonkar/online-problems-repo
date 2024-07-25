/**
Problem Statement:
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

Example 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

Example 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.

 */
function sortArray(nums: number[]): number[] {
  function merge(leftArr: number[], rightArr: number[]): number[] {
    let sortedArr = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] < rightArr[0]) {
        sortedArr.push(leftArr.shift());
      } else {
        sortedArr.push(rightArr.shift());
      }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
  }
  function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, mid));
    let rightArr = mergeSort(arr.slice(mid));

    return merge(leftArr, rightArr);
  }
  return mergeSort(nums);
}
console.log(sortArray([5, 1, 1, 2, 0, 0]));
