function findDifference(number) {
  let difference = 13 - number;

  if (difference < 0) {
    difference = -difference;
  }

  if (number > 13) {
    return difference * 2;
  } else {
    return difference;
  }
}

const number = prompt("Enter Number: ");
console.log(findDifference(number));
