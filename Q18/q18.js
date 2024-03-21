function checkPair(num1, num2) {
  let sum = num1 + num2;

  if (num1 === 50 || num2 === 50 || sum === 50) {
    return true;
  } else {
    return false;
  }
}

let num1 = prompt("Enter Num1: ");
let num2 = prompt("Enter Num2: ");

console.log(checkPair(+num1, +num2));
