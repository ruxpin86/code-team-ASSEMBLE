class Employee {
  constructor(name, id, email) {
    this.empName = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.empName;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
