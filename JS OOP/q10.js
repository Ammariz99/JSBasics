class Product {
  constructor(productId, name, price) {
    this.productId = productId;
    this.name = name;
    this.price = price;
  }

  calculateTotalPrice(quantity) {
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(productId, name, price, warrantyPeriod) {
    super(productId, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  calculateTotalPrice(quantity) {
    const totalPrice = super.calculateTotalPrice(quantity);
    return totalPrice + this.warrantyPeriod;
  }
}

const toothbrush = new PersonalCareProduct(
  "123456",
  "Electric Toothbrush",
  29.99,
  1
);
const quantity = 3;
const totalPrice = toothbrush.calculateTotalPrice(quantity);

console.log(
  `Total price for ${quantity} ${toothbrush.name}s: $${totalPrice.toFixed(2)}`
);
