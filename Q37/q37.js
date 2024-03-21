let inputString = prompt("Enter a string: ");

if (inputString.length >= 3) {
  let firstThreeChars = inputString.substring(0, 3).toLowerCase();
  console.log("New string:", firstThreeChars + inputString.substring(3));
} else {
  console.log("New string:", inputString.toUpperCase());
}
