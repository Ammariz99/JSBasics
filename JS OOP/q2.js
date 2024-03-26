class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  rectangleArea() {
    return this.width * this.height;
  }
  perimeterArea() {
    return 2 * (this.width + this.height);
  }
}

const obj1 = new Rectangle(5, 10);
const area = obj1.rectangleArea();
const perimeter = obj1.perimeterArea();

console.log("Rectangle Area: ", area);
console.log("Perimeter Area: ", perimeter);
