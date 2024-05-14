// Kata: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Examples:
// findShort("bitcoin take over the world maybe who knows perhaps") => 3
// findShort("turns out random test cases are easier than writing out basic ones") => 3
// findShort("Let's travel abroad shall we") => 2

const findShort = (s) => {
  const words = s.split(' ');
  let shortestWord = words[0].length;
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestWord) {
      shortestWord = words[i].length;
    }
  }
  return shortestWord;
}

// Test Case #1:
console.log(findShort("bitcoin take over the world maybe who knows perhaps")) // 3

// Test Case #2:
console.log(findShort("turns out random test cases are easier than writing out basic ones")) // 3

// Test Case #3:
console.log(findShort("Let's travel abroad shall we")) // 2