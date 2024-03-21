/*24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  */

let userString = prompt("Enter String: ");

let firstChar = userString.charAt(0);
let modifiedString = firstChar + userString + firstChar;

console.log("Result: ", modifiedString);
