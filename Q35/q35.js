let inputString = prompt("Enter a string: ");
let specifiedChar = prompt("Enter the specified character: ");

if (inputString.length >= 4) {
  let charAtIndex2 = inputString.charAt(1);
  let charAtIndex3 = inputString.charAt(2);
  let charAtIndex4 = inputString.charAt(3);

  if (
    specifiedChar === charAtIndex2 ||
    specifiedChar === charAtIndex3 ||
    specifiedChar === charAtIndex4
  ) {
    console.log(specifiedChar, "exists between the 2nd and 4th position.");
  } else {
    console.log(specifiedChar, "exists between the 2nd and 4th position.");
  }
} else {
  console.log("Please enter a string with at least 4 characters.");
}
