let side1;
let side2;
let side3;

let input = prompt("Enter Triangle sides: ");

let sideArray = input.split(",").map(Number);
side1 = sideArray[0];
side2 = sideArray[1];
side3 = sideArray[2];

let allSides = (side1 + side2 + side3) / 2;
let areaOfTriangle = Math.sqrt(
  allSides * (allSides - side1) * (allSides - side2) * (allSides - side3)
);

console.log(`Area of Triangle is:  ${areaOfTriangle}`);
