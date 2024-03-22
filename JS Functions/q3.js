/* 3. Write a JavaScript function that generates all combinations of a string.
 */

function generateCombo(str) {
  let combination = [];

  function backtrack(index = 0, current = "") {
    if (index === str.length) {
      combination.push(current);
      return;
    }
    backtrack(index + 1, current + str[index]);
    backtrack(index + 1, current);
  }
  backtrack();
  return combination;
}
const userInput = prompt("Enter String: ");
let result = generateCombo(userInput);
console.log(result);
