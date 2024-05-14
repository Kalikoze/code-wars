// Kata: https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples:
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

const findOutlier = (integers) => {
  const counter = integers.reduce((acc, num) => {
    num % 2 && acc++
    return acc;
  }, 0);
  const isMostlyOdd = counter > 1
  return integers.find(num => isMostlyOdd ? num % 2 === 0 : num % 2)
}

// Test Case #1:
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])) // 11

// Test Case #2:
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])) // 160