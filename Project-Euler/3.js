/**
 * Problem Statement:
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143?
 */

let num = 600851475143;
let maxPrime = 1;

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i <= Math.sqrt(num); i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0 && isPrime(i)) {
    maxPrime = i;
  }
}

console.log(maxPrime);
