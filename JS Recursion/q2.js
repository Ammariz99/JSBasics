/* find GCD */

function findGCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return findGCD(b, a % b);
  }
}

const num1 = prompt("Enter first No: ");
const num2 = prompt("Enter second no: ");
const result = findGCD(num1, num2);
console.log("GCD is: ", result);
