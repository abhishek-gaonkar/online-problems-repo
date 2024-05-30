/**
 * Problem Statement:
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10,001st prime number?
 */

let len = 10001;
let foundNum = 0;

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let num = 1;
while (foundNum !== len) {
  num++;
  let prime = isPrime(num);
  prime && foundNum++;
}

console.log(num);
