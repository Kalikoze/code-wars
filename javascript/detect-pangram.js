// Kata: https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// Example
// isPangram("The quick, brown fox jumps over the lazy dog!") => true
// isPangram("1bcdefghijklmnopqrstuvwxyz") => false


const isPangram = str => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return alphabet.every(letter => str.toLowerCase().includes(letter));
}

// Test Case 1:
console.log(isPangram("The quick, brown fox jumps over the lazy dog!"))

// Test Case 2:
console.log(isPangram("1bcdefghijklmnopqrstuvwxyz"))