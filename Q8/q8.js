const randomNum = Math.floor(Math.random() * 10) + 1;
const userGuess = prompt("Enter No btw 1 to 10: ");

if (randomNum === userGuess) {
  console.log("Good Work");
} else {
  console.log("Not Matched! Random Number is:" + randomNum);
}
