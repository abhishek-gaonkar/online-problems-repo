/**
 * Problem Statement:
 * 
 * Given a string s, find the length of the longest substring without repeating characters.
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
 */

function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let start = 0;
  let hashMap: { [key: string]: number } = {};

  for (let end = start; end < s.length; end++) {
    const currentChar = s[end];

    if (hashMap[currentChar] !== undefined && hashMap[currentChar] >= start) {
      start = hashMap[currentChar] + 1;
    }
    hashMap[currentChar] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
