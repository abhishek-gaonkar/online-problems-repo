// Problem Statement:
// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, \dots
// Let us list the factors of the first seven triangle numbers:
//
//  1 : 1
//  3 : 1,3
//  6 : 1,2,3,6
// 10 : 1,2,5,10
// 15 : 1,3,5,15
// 21 : 1,3,7,21
// 28 : 1,2,4,7,14,28
//
// We can see that 28 is the first triangle number to have over five divisors.
// What is the value of the first triangle number to have over five hundred divisors?

let divisorsLengthLimit = 500;

function divisorsLength(num) {
  let count = 0;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      num / i === i ? count++ : (count += 2);
    }
  }
  return count;
}

function triangleNumber(index) {
  let arr = Array.from({ length: index }, (_, k) => k + 1);
  return arr.reduce((prev, cur) => prev + cur, 0);
}

let num = 1;

while (true) {
  let tNum = triangleNumber(num);
  if (divisorsLength(tNum) >= divisorsLengthLimit) {
    console.log(tNum);
    break;
  }
  num++;
}
