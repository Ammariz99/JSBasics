let num1 = prompt("Enter first Number: ");
let num2 = prompt("Enter second Number: ");
let num3 = prompt("Enter third Number: ");

let largestNum = num1;

if (num2 > largestNum) {
  largestNum = num2;
}
if (num3 > largestNum) {
  largestNum = num3;
}

console.log("Largest Number is: ", largestNum);
