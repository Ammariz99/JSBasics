/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
 */

function capitalizeWord(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

let userInput = prompt("Enter String: ");
let result = capitalizeWord(userInput);
console.log(result);
