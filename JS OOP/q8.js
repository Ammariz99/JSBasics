class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    return `The ${this.species} makes a sound: ${this.sound}`;
  }
}

class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }

  makeSound() {
    return `The ${this.color} ${this.species} makes a sound: ${this.sound}`;
  }
}

const myDog = new Dog("Dog", "Woof", "Brown");

console.log(myDog.makeSound());
