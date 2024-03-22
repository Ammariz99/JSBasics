function isPerfectNumber(number) {
  if (number <= 1) {
    return false;
  }
  let divisorSum = 1;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      divisorSum += i;
      if (i !== number / i) {
        divisorSum += number / i;
      }
    }
  }
  return divisorSum === number;
}

let number = parseInt(prompt("Enter a number to check if it's perfect:"));
if (isPerfectNumber(number)) {
  console.log(number, " is a perfect number.");
} else {
  console.log(number, "is not a perfect number.");
}
