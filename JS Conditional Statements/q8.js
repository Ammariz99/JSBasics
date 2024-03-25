/* According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers. */

function isHappyNumber(number, iterations = 10) {
  if (iterations === 0) {
    return false;
  }

  let sumOfSquares = 0;
  while (number > 0) {
    const digit = number % 10;
    sumOfSquares += digit * digit;
    number = Math.floor(number / 10);
  }

  if (sumOfSquares === 1) {
    return true;
  } else {
    return isHappyNumber(sumOfSquares, iterations - 1);
  }
}

function findFirstNHappyNumbers(n) {
  const happyNumbers = [];
  let number = 1;

  while (happyNumbers.length < n) {
    if (isHappyNumber(number)) {
      happyNumbers.push(number);
    }
    number++;
  }

  return happyNumbers;
}
const first5HappyNumbers = findFirstNHappyNumbers(5);
console.log("The first 5 happy numbers are:", first5HappyNumbers);
