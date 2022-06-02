const Engineer = require("../lib/engineer");

decribe("Engineer class", () => {
  it("Tests for office number and role override", () => {
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
    const { git } = gitHub;

    expect(engineer.getGit()).toBe(git);
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
