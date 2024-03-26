class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  vehicleDetails() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, noOfDoors) {
    super(make, model, year);
    this.noOfDoors = noOfDoors;
  }

  vehicleDetails() {
    return `${super.vehicleDetails()}, No of Doors: ${this.noOfDoors}`;
  }
}

const obj1 = new Car("Toyota", "Corolla", 2023, 4);
console.log(obj1.vehicleDetails());
