/**
 * Problem Statement:
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2.
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.Find the product abc.
 */

let solution = 1;

for (let k = 3; k < 1000; k++) {
  for (let j = 2; j < k; j++) {
    for (let i = 1; i < j; i++) {
      if (i ** 2 + j ** 2 === k ** 2 && i + j + k === 1000) {
        solution = i * j * k;
      }
    }
  }
}

console.log(solution);
