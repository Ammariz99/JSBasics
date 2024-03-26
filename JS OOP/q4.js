class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      `Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`
    );
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`
      );
    } else {
      console.log(`Insufficient balance in account ${this.accountNumber}.`);
    }
  }
}

const account1 = new BankAccount("123456789", 1000);
const account2 = new BankAccount("987654321", 500);

account1.deposit(500);
account1.withdraw(200);
account2.deposit(1000);
account2.withdraw(700);
