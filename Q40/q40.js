let num1 = parseInt(prompt("Enter the first integer: "));
let num2 = parseInt(prompt("Enter the second integer: "));

let sum = num1 + num2;
let difference = Math.abs(num1 - num2);

if (num1 === 8 || num2 === 8 || sum === 8 || difference === 8) {
  console.log("One of the numbers is 8 or their sum/difference is 8.");
} else {
  console.log("conditions are not met.");
}
