const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
// Array for user data to be stored.
let employees = [];

const render = require("./lib/htmlRenderer");
// function that starts the app. It prompts the user to enter the role of the employee. Then it will call the function related to the role that was chosen
function employee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is the employee's role?",
        name: "role",
        choices: ["manager", "engineer", "intern"],
      },
    ])
    // Response from inquirer and conditionals to call the function related to the role that was chosen
    .then((employee) => {
      if (employee.role == "manager") {
        manager();
      } else if (employee.role == "engineer") {
        engineer();
      } else {
        intern();
      }
    });
}
// function that prompts the user to ask questions based on the managers role.
function manager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employee's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the employee's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the managers office number?",
        name: "officeNumber",
      },
      {
        type: "list",
        message: "do you want to add more employees",
        name: "addEmp",
        choices: ["yes", "no"],
      },
    ])
    // Response from inquirer and conditionals to call the function related to he users choice.
    .then((manager) => {
      let teamManager = new Manager(
        manager.name,
        manager.id,
        manager.email,
        manager.officeNumber
      );
      // this pushes the data into the Array.
      employees.push(teamManager);
      // conditional that calls the employee function if the answer to add another employee is yes.
      if (manager.addEmp == "yes") {
        employee();
      } else {
        // this calls the htmlrenderer modual and passes the employees array through intern.
        render(employees);
        // this writes the newly created html to the team.html file.
        fs.writeFile("output/team.html", render(employees), "UTF8", (err) => {
          if (err) throw err;
          console.log("The file has been created!");
        });
      }
    });
}
// function that prompts the user to ask questions based on the engineers role.
function engineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employee's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the employee's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's github username?",
        name: "github",
      },
      {
        type: "list",
        message: "do you want to add more employees",
        name: "addEmp",
        choices: ["yes", "no"],
      },
    ])

    .then((engineer) => {
      let newEngineer = new Engineer(
        engineer.name,
        engineer.id,
        engineer.email,
        engineer.github
      );
      // this pushes the data into the Array.
      employees.push(newEngineer);
      console.log(newEngineer);
      // conditional that calls the employee function if the answer to add another employee is yes.
      if (engineer.addEmp == "yes") {
        employee();
      } else {
        // this calls the htmlrenderer modual and passes the employees array through intern.
        render(employees);
        // this writes the newly created html to the team.html file.
        fs.writeFile("output/team.html", render(employees), "UTF8", (err) => {
          if (err) throw err;
          console.log("The file has been created!");
        });
      }
    });
}
// function that prompts the user to ask questions based on the interns role.
function intern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employee's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the employee's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the intern's school name?",
        name: "school",
      },
      {
        type: "list",
        message: "do you want to add more employees",
        name: "addEmp",
        choices: ["yes", "no"],
      },
    ])

    .then((intern) => {
      let newIntern = new Intern(
        intern.name,
        intern.id,
        intern.email,
        intern.school
      );
      // this pushes the data into the Array.
      employees.push(newIntern);
      console.log(newIntern);
      // conditional that calls the employee function if the answer to add another employee is yes.
      if (intern.addEmp == "yes") {
        employee();
      } else {
        // this calls the htmlrenderer modual and passes the employees array through intern.
        render(employees);
        // this writes the newly created html to the team.html file.
        fs.writeFile("output/team.html", render(employees), "UTF8", (err) => {
          if (err) throw err;
          console.log("The file has been created!");
        });
      }
    });
}

employee();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// inquirer.prompt([

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
