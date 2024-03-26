class University {
  constructor(universityName) {
    this.universityName = universityName;
    this.departments = [];
  }

  addDepartment(departmentName) {
    if (!this.departments.includes(departmentName)) {
      this.departments.push(departmentName);
    }
  }

  removeDepartment(departmentName) {
    const index = this.departments.indexOf(departmentName);
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
  }

  displayDepartments() {
    console.log(`Departments of ${this.universityName}:`);
    this.departments.forEach((department) => console.log(department));
  }
}

const myUniversity = new University("MyUniversity");

myUniversity.addDepartment("Computer Science");
myUniversity.addDepartment("Mathematics");
myUniversity.addDepartment("Physics");

myUniversity.displayDepartments();

myUniversity.removeDepartment("Mathematics");

myUniversity.displayDepartments();
