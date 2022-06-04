//declaring global variables and required files
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const answerArray = [];
const genHtml = require("./src/template");

//Array of questions to determine universal employee info
function employeeQs(role) {
  console.log(role);
  inquirer
    .prompt([
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
    ])
    .then((answer) => {
      const employee = new Employee();
      if (role === "Manager") {
        managerQs(answer);
      } else if (role === "Engineer") {
        engineerQs(answer);
      } else if (role === "Intern") {
        internQs(answer);
      } else {
        console.log("An error occured, please rerun index.js");
      }
    });
}

//Kickoff function for Manager questions
function managerQs() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "empName",
        message: "Please enter your name.",
      },
      {
        type: "input",
        name: "empID",
        message: "Please enter your employee ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email.",
      },
      {
        type: "input",
        name: "office",
        message: "Please enter office number.",
      },
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.empName,
        answer.empID,
        answer.email,
        answer.office
      );
      answerArray.push(manager);
      console.log(answerArray);
      empRole();
    });
}

//Determine employee role and loop/add more employees or terminate app then generate html
function empRole() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please select the new employees role.",
        choices: ["Engineer", "Intern", "Exit"],
      },
    ])
    .then((answer) => {
      if (answer.role === "Exit") {
        console.log(answerArray);
        genHtml();
      } else {
        employeeQs(answer.role);
      }
    });
}

//Get unique Engineer input and persist employee questions
function engineerQs(employeeQs) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "Please enter engineers's github user name.",
      },
    ])
    .then((answer) => {
      answerArray.push(
        new Engineer(
          employeeQs.empName,
          employeeQs.empID,
          employeeQs.email,
          answer.github
        )
      );
      empRole();
    });
}

//Get unique Intern input and persist employee questions
function internQs(employeeQs) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "Please enter intern's current school.",
      },
    ])
    .then((answer) => {
      answerArray.push(
        new Intern(
          employeeQs.empName,
          employeeQs.empID,
          employeeQs.email,
          answer.school
        )
      );
      empRole();
    });
}

//Call function to begin prompts
managerQs();
