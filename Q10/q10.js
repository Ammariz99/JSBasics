const input1 = prompt("enter 1st number:");
const input2 = prompt("enter 2nd number:");
const operation = prompt("enter operation: ");

if (operation === "multiply") {
  const multiplication = input1 * input2;
  console.log("Value after multiplication is: ", multiplication);
} else if (operation === "divide") {
  const divide = input1 / input2;
  console.log("Value after division is: ", divide);
}
