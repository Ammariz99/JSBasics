/* Find largest No */

function LargestInteger(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is the largest integer.");
  } else if (num2 > num1) {
    console.log(num2 + " is the largest integer.");
  } else {
    console.log("Both integers are equal.");
  }
}
LargestInteger(10, 5);
LargestInteger(15, 20);
