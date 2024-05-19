// Kata: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

// DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Examples:
// high('man i need a taxi up to ubud') // => 'taxi'
// high('what time are we climbing up the volcano') // => 'volcano'

const high = (str) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const words = str.split(' ');
  const valuesOfEachWord = words.map(word => {
    return word.split('').reduce((acc, letter) => {
      const value = letters.indexOf(letter) + 1;
      return acc + value;
    }, 0);
  });
  return words[valuesOfEachWord.indexOf(Math.max(...valuesOfEachWord))]
}

// Test Case #1:
console.log(high('man i need a taxi up to ubud')) // => 'taxi'

// Test Case #2:
console.log(high('what time are we climbing up the volcano')) // => 'volcano'

// Test Case #3:
console.log(high('take me to semynak')) // => 'semynak'

// Test Case #4:
console.log(high('aa b')) // => 'aa'

// Test Case #5:  
console.log(high('b aa')) // => 'b'

// Test Case #6:
console.log(high('bb d')) // => 'bb'

// Test Case #7: 
console.log(high('d bb')) // => 'd'

// Test Case #8:
console.log(high('aaa b')) // => 'aaa'

