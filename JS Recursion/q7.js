/* function to check even */

function checkEven(num) {
  if (num % 2 === 0) {
    console.log("Number is Even");
  } else {
    console.log("Number is not even");
  }
}

const num = prompt("Enter No: ");
const result = checkEven(num);
