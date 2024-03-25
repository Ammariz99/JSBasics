/* A string consists of digits ranging from 2 to 9, inclusive. Write a JavaScript program to get all possible letter combinations that represent the number using recursion.  */

const digitToLettersMap = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const result = [];
  const firstDigit = digits[0];
  const remainingDigits = digits.slice(1);

  const letters = digitToLettersMap[firstDigit];

  if (typeof letters === "string") {
    for (let letter of letters) {
      if (remainingDigits.length === 0) {
        result.push(letter);
      } else {
        const combinations = letterCombinations(remainingDigits);
        for (let combination of combinations) {
          result.push(letter + combination);
        }
      }
    }
  }

  return result;
}

const test1 = "12";
const test2 = "9";

console.log(letterCombinations(test1));
console.log(letterCombinations(test2));
