/* check whether string is palindrom or not */

function isPalindrom(string) {
  return string === string.split("").reverse().join("");
}
const userInput = prompt("Enter String: ");
if (isPalindrom(userInput)) {
  console.log("Palindrom");
} else {
  console.log("not palindrom");
}
