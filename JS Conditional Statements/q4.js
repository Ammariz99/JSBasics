/* 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
 */

function findLargest(num1, num2, num3, num4, num5) {
  let largest = num1;

  if (num2 > largest) {
    largest = num2;
  }
  if (num3 > largest) {
    largest = num3;
  }
  if (num4 > largest) {
    largest = num4;
  }
  if (num5 > largest) {
    largest = num5;
  }

  alert(
    "The largest number among " +
      num1 +
      ", " +
      num2 +
      ", " +
      num3 +
      ", " +
      num4 +
      ", and " +
      num5 +
      " is: " +
      largest +
      "."
  );
}

findLargest(10, 20, 5, 30, 15);
findLargest(5, 10, 8, 15, 12);
