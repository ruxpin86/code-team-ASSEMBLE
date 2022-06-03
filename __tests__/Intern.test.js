const Intern = require("../lib/intern");

describe("Intern class", () => {
  it("Tests for intern school and role override", () => {
    const intern = new Intern("Jerry", "9", "jerry@email.com", "DU");

    expect(typeof intern.school).toBe("string");
  });
  it("should get intern's current school", () => {
    const intern = new Intern("Jerry", "9", "jerry@email.com", "DU");
    const { school } = intern;

    expect(intern.getSchool()).toBe(school);
  });
  it("should set role to Intern", () => {
    const intern = new Intern("Jerry", "9", "jerry@email.com", "DU");

    expect(intern.getRole()).toBe("Intern");
  });
});
