/**
Problem Statement:
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

 */
////////// METHOD 1: Brute-Force
function bruteForceIntersect(nums1: number[], nums2: number[]): number[] {
  let commonArr = [];
  let [longerArr, shorterArr] =
    nums1.length >= nums2.length ? [nums1, nums2] : [nums2, nums1];

  while (shorterArr.length > 0) {
    if (longerArr.includes(shorterArr[0])) {
      commonArr.push(shorterArr[0]);
      longerArr.splice(longerArr.indexOf(shorterArr[0]), 1);
    }
    shorterArr.shift();
  }

  return commonArr;
}

////////// METHOD 2: Hash Map
function intersect(nums1: number[], nums2: number[]): number[] {
  let commonArr: number[] = [];
  let hashMap: Map<number, number> = new Map();

  for (const val of nums1) {
    hashMap.get(val)
      ? hashMap.set(val, hashMap.get(val) + 1)
      : hashMap.set(val, 1);
  }

  for (const val of nums2) {
    let value = hashMap.get(val) || 0;
    if (value > 0) {
      commonArr.push(val);
      value === 1
        ? hashMap.delete(val)
        : hashMap.set(val, hashMap.get(val) - 1);
    }
  }

  return commonArr;
}

console.log(intersect([9, 4, 9, 8, 4], [4, 9, 5]));
