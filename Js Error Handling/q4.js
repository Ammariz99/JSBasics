/* 5. Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.
 */
function checkNegative(num1) {
  if (num1 < 0) {
    throw new Error("Number is Negative");
  } else {
    return num1;
  }
}

const userInput1 = prompt("Enter Num: ");

try {
  const value = checkNegative(userInput1);
  console.log("Result:", value);
} catch (error) {
  console.error("Error:", error.message);
}
