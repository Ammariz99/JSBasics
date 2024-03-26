class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  displayDetails() {
    return `Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear}`;
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear);
    this.price = price;
  }

  displayDetails() {
    return `${super.displayDetails()}, Price: ${this.price}`;
  }
}

const ebook = new Ebook("JavaScript Basics", "John Doe", 2022, "$25.99");

console.log(ebook.displayDetails());
