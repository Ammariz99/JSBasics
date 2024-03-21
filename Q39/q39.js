function getSum(num1, num2) {
  let sum = num1 + num2;

  if (sum >= 50 && sum <= 80) {
    return 65;
  } else {
    return 80;
  }
}

let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");

let result = getSum(num1, num2);
console.log("Result:", result);
