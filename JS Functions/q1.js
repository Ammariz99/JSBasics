/*  Write a JavaScript function that reverses a number. */

function reverseNumber(num) {
  let reversedNum = 0;
  while (num !== 0) {
    let digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reversedNum;
}
let number = prompt("enter no: ");
let reversedNumber = reverseNumber(number);
console.log(reversedNumber);
