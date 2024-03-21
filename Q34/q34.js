let num1 = prompt("Enter first number in btw 40 to 60: ");
let num2 = prompt("Enter second number in btw 40 to 60: ");

if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
  if (num1 > num2) {
    console.log("The largest number is:", num1);
  } else {
    console.log("The largest number is:", num2);
  }
} else {
  console.log("Number not in specified range");
}
