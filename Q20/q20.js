function checkNegativePositive(num1, num2) {
  if (num1 > 0 && num2 < 0) {
    console.log(num1 + " is positive and " + num2 + " is negative.");
  } else if (num1 < 0 && num2 > 0) {
    console.log(num1 + " is negative and " + num2 + " is positive.");
  } else {
    console.log("Enter postive and negative");
  }
}

let num1 = prompt("Enter a positive or negative number: ");
let num2 = prompt("Enter another positive or negative number: ");

checkNegativePositive(num1, num2);
