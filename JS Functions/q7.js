/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
 */

function countVowels(str) {
  str = str.toLowerCase();

  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

let userInput = prompt("Enter String: ");
let result = countVowels(userInput);
console.log("Vowels in string: ", result);
