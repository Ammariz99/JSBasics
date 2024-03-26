class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(
        `Deposited $${amount} into account ${this.accountNumber}. New balance: $${this.balance}`
      );
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `Withdrawn $${amount} from account ${this.accountNumber}. New balance: $${this.balance}`
      );
    }
  }

  transfer(amount, targetAccount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      targetAccount.balance += amount;
      console.log(
        `Transferred $${amount} from account ${this.accountNumber} to account ${targetAccount.accountNumber}.`
      );
    }
  }

  displayBalance() {
    console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
  }
}

const account1 = new BankAccount("123456789", "John Doe", 1000);
const account2 = new BankAccount("987654321", "Jane Smith", 500);

account1.displayBalance();
account1.deposit(500);
account1.withdraw(200);
account1.displayBalance();

account2.displayBalance();
account2.deposit(1000);
account2.transfer(300, account1);
account2.displayBalance();
account1.displayBalance();
