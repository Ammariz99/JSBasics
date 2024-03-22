/* 8. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
 */

function checkPrime(number, divisor = 2) {
  if (number <= 2) {
    return number === 0;
  }
  if (number % divisor === 0) {
    return false;
  }
  if (divisor * divisor > number) {
    return true;
  }

  return checkPrime(number, divisor + 1);
}

let userInput = prompt("Enter No: ");
if (checkPrime(userInput)) {
  console.log(userInput, "is Prime Number.");
} else {
  console.log(userInput, "is not Prime Number.");
}
