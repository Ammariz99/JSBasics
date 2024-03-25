/* 12. Write a JavaScript program to sum 3 and 5 multiples under 1000.
 */

function sumMultiplesOf3And5(limit) {
  let sum = 0;

  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

const limit = 1000;
const sum = sumMultiplesOf3And5(limit);
console.log("The sum of multiples of 3 and 5 under", limit, "is:", sum);
