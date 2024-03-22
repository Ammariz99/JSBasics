function computeExponent(base, exponent) {
  return Math.pow(base, exponent);
}
function computeUserInput() {
  let base = parseFloat(prompt("Enter the base (b):"));
  let exponent = parseInt(prompt("Enter the exponent (n):"));

  if (!isNaN(base) && !isNaN(exponent)) {
    let result = computeExponent(base, exponent);
    console.log(`Result: ${base}^${exponent} = ${result}`);
  } else {
    console.log("Invalid input. Please enter valid numbers.");
  }
}
computeUserInput();
