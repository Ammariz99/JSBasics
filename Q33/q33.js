let num1 = prompt("Enter First Number: ");
let num2 = prompt("Enter Second Number: ");

if ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) {
  if ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100)) {
    console.log("Number in specified range");
  } else {
    console.log("Second Number is not in Range");
  }
} else {
  console.log("first number is not in range.");
}
