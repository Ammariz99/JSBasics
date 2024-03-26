class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  details() {
    return console.log(
      "Name:",
      this.name,
      "Age:",
      this.age,
      "Country:",
      this.country
    );
  }
}

const obj1 = new Person("Ammar", 25, "Pakistan");
const obj2 = new Person("Haris", 22, "USA");

console.log(obj1.details());
console.log(obj2.details());
