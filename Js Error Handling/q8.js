/* 8. Write a JavaScript program that shows the use of multiple catch blocks to handle different types of errors separately.

*/

try {
  const userInput = prompt("Enter a number:");
  const num = parseFloat(userInput);

  if (typeof num !== "number" || Number.isNaN(num)) {
    throw new TypeError("Error: Input is not a valid number.");
  }

  if (num < 0) {
    throw new RangeError("Error: Input is negative.");
  }

  console.log("Square root:", Math.sqrt(num));
} catch (error) {
  console.error("Error:", error.message);
}
