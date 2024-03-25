/* Find Factorial */

function findFactorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * findFactorial(num - 1);
  }
}

const num = prompt("Enter No: ");
const result = findFactorial(num);
console.log("Factorial is: ", result);
