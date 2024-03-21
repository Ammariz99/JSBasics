let userString = prompt("Enter String: ");

if (userString.length >= 3) {
  let lastThreeChar = userString.slice(-3);
  let newString = lastThreeChar + userString + lastThreeChar;
  console.log("Output: ", newString);
}
