const Employee = require("../lib/employee");

describe("Employee class", () => {
  it("Tests for name, id, email", () => {
    const employee = new Employee("Jerry", "9", "jerry@email.com");

    expect(typeof employee.getName()).toBe("string");

    expect(typeof employee.getId()).toBe("string");

    expect(typeof employee.getEmail()).toBe("string");
  });
  it("should get name", () => {
    const employee = new Employee("Jerry", "9", "jerry@email.com");
    const { empName } = employee;

    expect(employee.getName()).toBe(empName);
  });

  it("should get ID", () => {
    const employee = new Employee("Jerry", "9", "jerry@email.com");
    const { id } = employee;

    expect(employee.getId()).toBe(id);
  });

  it("should get email", () => {
    const employee = new Employee("Jerry", "9", "jerry@email.com");
    const { email } = employee;

    expect(employee.getEmail()).toBe(email);
  });

  it("should get role", () => {
    const employee = new Employee("Jerry", "9", "jerry@email.com");

    expect(employee.getRole()).toBe("Employee");
  });
});
