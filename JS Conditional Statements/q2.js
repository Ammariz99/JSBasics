/* 2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
 */

function findProductSign(num1, num2, num3) {
  let product = num1 * num2 * num3;
  let sign;

  if (product > 0) {
    sign = "positive";
  } else if (product < 0) {
    sign = "negative";
  } else {
    sign = "zero";
  }

  alert("The sign of the product of the three numbers is: ", sign);
}

findProductSign(2, -3, 5);
findProductSign(-1, 0, 4);
findProductSign(2, 3, 4);
