// Kata: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

const filterList = l => l.filter(val => typeof val !== 'string');


// Test Case 1:
console.log(filterList([1,2,'a','b']))

// Test Case 2:
console.log(filterList([1,'a','b',0,15]))

// Test Case 3:
console.log(filterList([1,2,'aasf','1','123',123]))