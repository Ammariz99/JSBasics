function findDifference(number) {
  let difference = 19 - number;

  if (difference < 0) {
    difference = -difference;
  }

  if (number > 19) {
    return difference * 3;
  } else {
    return difference;
  }
}

const number = prompt("Enter Number: ");
console.log(findDifference(number));
