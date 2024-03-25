/* find exponent */

function findExponent(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * findExponent(base, exponent - 1);
  }
}

const base = prompt("Enter Base No: ");
const exponent = prompt("Enter Exponent No: ");
const result = findExponent(base, exponent);
console.log("Output: ", result);
