/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
 */

function sortThreeNumbers(num1, num2, num3) {
  let smallest, middle, largest;

  if (num1 <= num2 && num1 <= num3) {
    smallest = num1;
    if (num2 <= num3) {
      middle = num2;
      largest = num3;
    } else {
      middle = num3;
      largest = num2;
    }
  } else if (num2 <= num1 && num2 <= num3) {
    smallest = num2;
    if (num1 <= num3) {
      middle = num1;
      largest = num3;
    } else {
      middle = num3;
      largest = num1;
    }
  } else {
    smallest = num3;
    if (num1 <= num2) {
      middle = num1;
      largest = num2;
    } else {
      middle = num2;
      largest = num1;
    }
  }

  alert(
    "The sorted numbers are: " + smallest + ", " + middle + ", " + largest + "."
  );
}

sortThreeNumbers(5, 2, 8);
sortThreeNumbers(10, 1, 3);
sortThreeNumbers(7, 7, 2);
