const Manager = require("../lib/manager");

describe("Manager class", () => {
  it("Tests for office number and role override", () => {
    const manager = new Manager("Jerry", "9", "jerry@email.com", "101");

    expect(typeof manager.officeNumber()).toBe("string");
  });
  it("should get office number", () => {
    const manager = new Manager("Jerry", "9", "jerry@email.com", "101");
    const { office } = manager;

    expect(manager.officeNumber()).toBe(office);
  });
  it("should set role to Manager", () => {
    const manager = new Manager("Jerry", "9", "jerry@email.com", "101");

    expect(manager.getRole()).toBe("Manager");
  });
});
