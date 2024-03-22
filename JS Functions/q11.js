/* Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively. */

function findSecondLowestAndGreatest(numbers) {
  let sortedNumbers = numbers.sort((a, b) => a - b);
  let uniqueNumbers = [...new Set(sortedNumbers)];

  if (uniqueNumbers.length >= 2) {
    let secondLowest = uniqueNumbers[1];
    let secondGreatest = uniqueNumbers[uniqueNumbers.length - 2];
    return { secondLowest, secondGreatest };
  }
}
let numbers = [7, 3, 9, 5, 2, 9, 8, 4];
let result = findSecondLowestAndGreatest(numbers);
console.log("Second Lowest:", result.secondLowest);
console.log("Second Greatest:", result.secondGreatest);
