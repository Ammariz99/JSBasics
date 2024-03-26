class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calculateAnnualSalary() {
    const bonus = this.salary * 0.1;
    return (this.salary + bonus) * 12;
  }
}

const manager1 = new Manager("Ammar", 60000, "Sales");
const manager2 = new Manager("Ali", 70000, "Marketing");

console.log(
  `${manager1.name} (Department: ${
    manager1.department
  }) - Annual Salary: ${manager1.calculateAnnualSalary()}`
);
console.log(
  `${manager2.name} (Department: ${
    manager2.department
  }) - Annual Salary: ${manager2.calculateAnnualSalary()}`
);
