function getSum(number1, number2) {
  let sum = parseInt(number1) + parseInt(number2);

  if (number1 === number2) {
    return sum * 3;
  } else {
    return sum;
  }
}

let number1 = prompt("Enter First Number: ");
let number2 = prompt("Enter Second Number: ");
console.log("The value after sum is:", getSum(number1, number2));
