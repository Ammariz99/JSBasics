let userNum1 = prompt("Enter first Number: ");
let userNum2 = prompt("Enter 2nd Number: ");
let userNum3 = prompt("Enter third Number: ");

if (
  (userNum1 >= 50 && userNum1 <= 99) ||
  (userNum2 >= 50 && userNum1 <= 99) ||
  (userNum3 >= 50 && userNum3 <= 99)
) {
  console.log("number in range");
} else {
  console.log("number is not in range");
}
