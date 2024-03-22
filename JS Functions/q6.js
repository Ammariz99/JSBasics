/* 6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
 */

function findLongest(str) {
  let words = str.split(" ");
  let longestWord = "";
  let maxLength = 0;

  for (let word of words) {
    let length = word.length;

    if (length > maxLength) {
      longestWord = word;
      maxLength = length;
    }
  }
  return longestWord;
}

let userInput = prompt("Enter Word: ");
let result = findLongest(userInput);
console.log(result);
