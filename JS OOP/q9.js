class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.branches = [];
  }

  addBranch(branchName) {
    this.branches.push(branchName);
    console.log(`Added branch '${branchName}' to ${this.bankName}`);
  }

  removeBranch(branchName) {
    const index = this.branches.indexOf(branchName);
    if (index !== -1) {
      this.branches.splice(index, 1);
      console.log(`Removed branch '${branchName}' from ${this.bankName}`);
    } else {
      console.log(`Branch '${branchName}' not found in ${this.bankName}`);
    }
  }

  displayBranches() {
    console.log(`Branches of ${this.bankName}:`);
    this.branches.forEach((branch) => console.log(branch));
  }
}

const myBank = new Bank("MyBank");

myBank.addBranch("Branch A");
myBank.addBranch("Branch B");
myBank.addBranch("Branch C");

myBank.displayBranches();
myBank.removeBranch("Branch B");
myBank.displayBranches();
