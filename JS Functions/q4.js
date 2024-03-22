/* 4. Write a JavaScript function that returns a string that has letters in alphabetical order.
 */

function sortString(str) {
  return str.split("").sort().join("");
}

let userInput = prompt("Enter Stirng: ");
let result = sortString(userInput);
console.log(result);
