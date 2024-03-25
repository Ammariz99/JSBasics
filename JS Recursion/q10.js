/* check Palindrom */

function isPalindrom(string) {
  return string === string.split(",").reverse().join("");
}

const input = prompt("Enter String: ");
if (isPalindrom(input)) {
  console.log("Palindrom");
} else {
  console.log("Not Palindrom");
}
