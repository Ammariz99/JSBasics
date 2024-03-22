/* 1. Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

*/

const userInput = prompt("Enter Integer No: ");

if (!Number.isInteger(userInput)) {
  throw new Error("Please Enter Integer value.");
}
