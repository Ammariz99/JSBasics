function computeFactors(number) {
  let factors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

let number = parseInt(
  prompt("Enter a positive integer to compute its factors:")
);
let result = computeFactors(number);
console.log("Factors of", number, result);
