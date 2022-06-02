const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

function employeeQs() {
  inquirer.prompt([
    {
      type: "input",
      name: "empName",
      message: "Please enter the employees name.",
    },
    {
      type: "input",
      name: "empID",
      message: "Please enter the employees ID.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the employees email.",
    },
  ]);
}
