function findInteger(num1) {
  if (num1 >= 20 && num1 <= 100) {
    console.log("The number", num1, " is in between 20 to 100");
  } else if (num1 >= 1 && num1 <= 400) {
    console.log("The number", num1, "in in between 400");
  }
}

let num1 = prompt("Enter No: ");
console.log(findInteger(num1));
