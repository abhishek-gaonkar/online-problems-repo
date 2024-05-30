/**
 * Problem Statement:
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

let num = 100;
let sum = 0;
let arr = new Set();

for (let i = 1; i < num; i++) {
  if (i % 3 === 0) {
    arr.add(i);
  }
  if (i % 5 === 0) {
    arr.add(i);
  }
}

arr.forEach((val) => (sum += val));
console.log(sum);
