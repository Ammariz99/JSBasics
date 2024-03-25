/* find range */

function findRange(x, y, result = []) {
  if (x > y) {
    return result;
  } else {
    result.push(x);
    return findRange(x + 1, y, result);
  }
}

const start = parseInt(prompt("Enter Start Range: "));
const end = parseInt(prompt("Enter End Range: "));
const result = findRange(start, end);
console.log("Range is: ", result);
