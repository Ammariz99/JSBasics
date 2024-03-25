/* find GCD */

function findGCD(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

const num1 = 48;
const num2 = 18;
const gcd = findGCD(num1, num2);

console.log("The GCD of", num1, "and", num2, "is:", gcd);
