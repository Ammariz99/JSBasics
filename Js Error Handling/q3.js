/*3. Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.

*/

function divideNum(num1, num2) {
  if (num2 === 0) {
    throw new Error("Error: Number cant be divided by zero");
  } else {
    return num1 / num2;
  }
}

const userInput1 = parseFloat(prompt("Enter First Num: "));
const userInput2 = parseFloat(prompt("Enter Second Num: "));

try {
  const result = divideNum(userInput1, userInput2);
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error.message);
}
