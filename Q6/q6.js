function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    console.log(year, ": is Leap Year");
  } else {
    console.log(year, ": is not Leap Year");
  }
}

const inputYear = prompt("Enter Year: ");
checkLeapYear(inputYear);
