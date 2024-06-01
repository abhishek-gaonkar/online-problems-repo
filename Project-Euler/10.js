/**
 * Problem Statement:
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
 */

let limit = 2000000;

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let sum = 0;
for (let i = 2; i < limit; i++) {
  if (isPrime(i)) {
    sum += i;
  }
}

console.log(sum);
