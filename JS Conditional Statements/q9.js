/* 9. Write a JavaScript program to find the Armstrong numbers of 3 digits.
 */

function findArmstrong() {
  const armstrongNumbers = [];

  for (let i = 100; i < 1000; i++) {
    let sum = 0;
    let temp = i;

    while (temp > 0) {
      const digit = temp % 10;
      sum += digit ** 3;
      temp = Math.floor(temp / 10);
    }

    if (sum === i) {
      armstrongNumbers.push(i);
    }
  }

  return armstrongNumbers;
}

const armstrongNumbers = findArmstrong();
console.log("Armstrong numbers of 3 digits:", armstrongNumbers);
