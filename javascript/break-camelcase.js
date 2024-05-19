// Kata: https://www.codewars.com/kata/5208f99aee097e6552000148

// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const solution = string => {
  const letters = string.split('');
  const newLetters = [];
  letters.forEach(letter => {
    if (/[A-Z]/.test(letter)) {
      newLetters.push(' ')
    }
      newLetters.push(letter);
  });
  return newLetters.join('');
}

// Test Case #1:
console.log(solution("camelCasing")) // "camel Casing"

// Test Case #2:
console.log(solution("identifier")) // "identifier"

// Test Case #3:
console.log(solution("")) // ""
