const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
  it("Tests for github name and role override", () => {
    const engineer = new Engineer(
      "Jerry",
      "9",
      "jerry@email.com",
      "gitJerry90"
    );

    expect(typeof engineer.github).toBe("string");
  });
  it("should get github username", () => {
    const engineer = new Engineer(
      "Jerry",
      "9",
      "jerry@email.com",
      "gitJerry90"
    );
    const { github } = engineer;

    expect(engineer.getGit()).toBe(github);
  });
  it("should set role to Engineer", () => {
    const engineer = new Engineer(
      "Jerry",
      "9",
      "jerry@email.com",
      "gitJerry90"
    );

    expect(engineer.getRole()).toBe("Engineer");
  });
});
