/**
 * Problem Statement:
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 * 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

function isPalindrome(num) {
  let numStr = num.toString();
  let revNumStr = numStr.split("").reverse().join("");
  let isPalindrome = numStr === revNumStr;
  return isPalindrome;
}

let max = 0;
for (let i = 999; i > 99; i--) {
  for (let j = i; j > 99; j--) {
    if (isPalindrome(i * j) && max < i * j) {
      max = i * j;
      console.log({ i, j, "i*j": i * j });
    }
  }
}

console.log(max);
