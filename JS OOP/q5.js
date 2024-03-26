class Shape {
  calculateArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return 0.5 * this.base * this.height;
  }
}

const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea().toFixed(2));

const triangle = new Triangle(4, 6);
console.log("Triangle Area:", triangle.calculateArea());
