let num1 = prompt("Enter First Number: ");
let num2 = prompt("Enter Second Number: ");

let diffrence1 = 100 - num1;
let diffrence2 = 100 - num2;

let closeToHundred;

if (diffrence1 < diffrence2) {
  closeToHundred = num1;
} else {
  closeToHundred = num2;
}
console.log("Nearest value to 100 is: ", closeToHundred);
