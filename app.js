const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
let employeeArray = [];

const render = require("./lib/htmlRenderer");

function employee() {
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
        type: "list",
        message: "What is the employee's role?",
        name: "role",
        choices: ["manager", "engineer", "intern"],
      },
    ])
    .then((employee) => {
      console.log(employee);
      if (employee.role == manager) {
        manager();
      } else if (employee.role == engineer){
          engineer();
      } else{
        Intern();
    }
      //get data put into cards => via render fx
      //whatever we pass has to be an array
      //each item of the array has to be an instance of a class => object
      //render(employees)
      //string of html content
      //write it to the file
    }); //ask for name
  //id
  //email
  //role
  //based on their speicif roles,, you will call the speciifc get fx
}

function manager(manager) {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the managers office number?",
            name: "officeNumber",
          },
    ])
  console.log(manager);
  //ask user for office number
  //ask user if they are done
  //then use the data to create an instance of the manager class
  //push into an array (employeeArray)
  //if done, what do we do?
  //render html passing employeeArra
  //if we are not done, what do we do? ask for more information
  //call main fx
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer.prompt([
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
    type: "list",
    message: "What is the employee's role?",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    message: "What is the managers office number?",
    name: "officeNumber",
  },
  {
    type: "input",
    message: "What is the engineers github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is the intern's school name?",
    name: "school",
  },
]);

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
