// Kata: https://www.codewars.com/kata/54e6533c92449cc251001667

// DESCRIPTION:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// unique_in_order([1, 2, 2, 3, 3])   == [1, 2, 3]

const uniqueInOrder = iterable => {
  if (!Array.isArray(iterable)) {
    iterable = iterable.split('');
  }
  const unique = [iterable[0]].filter(Boolean);
  for (let i = 1; i < iterable.length; i++) {
    if (unique[unique.length - 1] !== iterable[i]){
      unique.push(iterable[i])
    }
  }
  return unique;
}

// Test Case #1:
console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']

// Test Case #2:  
console.log(uniqueInOrder('ABBCcAD')) // ['A', 'B', 'C', 'c', 'A', 'D']

// Test Case #3:
console.log(uniqueInOrder([1, 2, 2, 3, 3])) // [1, 2, 3]