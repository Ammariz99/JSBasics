let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let num3 = prompt("Enter the third number: ");

if (num1 > 0 && num2 > 0 && num3 > 0) {
  let lastDigit1 = num1 % 10;
  let lastDigit2 = num2 % 10;
  let lastDigit3 = num3 % 10;

  if (lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3) {
    console.log("The last digits of the three numbers are the same.");
  } else {
    console.log("The last digits of the three numbers are not the same.");
  }
}
