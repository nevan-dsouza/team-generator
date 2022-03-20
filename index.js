// Import the important libraries 
const fs = require("fs"); // for saving files
const inquirer = require("inquirer"); // for prompts that add data to the employee objects

// Import classes from lib folder
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Import the HTML generator function from src folder
const generatePage = require("./src/page-template");

// Function that writes a file
let writeHTML = generatedHTML => {
    return fs.writeFile("./dist/index.html", generatedHTML, (err) =>
        err ? console.error(err) : console.log("HTML file successfully created! Check your dist folder.")
        );
};

let employees = [];
// Prompts for every employee:
let employeePrompts = [
    {
        type: "input",
        message: "Please enter the employee's name:",
        name: "name"
    },
    {
        type: "input",
        message: "Please enter the employee's ID number:",
        name: "id"
    },
    {
        type: "input",
        message: "Please enter the employee's email address:",
        name: "email",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please do not leave this blank.");
                return false;
            }
        }
    }
];

// Prompts that decides if (more) intern/engineer prompts should be called or not
let addTeamMember = (employees) => {
    return inquirer.prompt({
        type: "list",
        message: "Would you like to add another team member?",
        name: "memberType",
        choices: ["Yes, an Engineer.", "Yes, an Intern.", "No, I have finished creating my team."]
    })
        .then(({ memberType }) => {
            if (memberType === "Yes, an Engineer.") {
                return engineerPrompt(employees);
            } else if (memberType === "Yes, an Intern.") {
                return internPrompt(employees);
            } else {
                return employees;
            }
        });
};

// Prompts for adding a manager (only will occur once)
let managerPrompt = () => {
    let newPrompt = [];

    console.log("~~~~~~~~~~~~~~~~~~\nAdding the Manager\n~~~~~~~~~~~~~~~~~~");
    newPrompt = employeePrompts.concat({
        type: "input",
        message: "Please enter the assigned office number of the manager:",
        name: "officeNumber",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please do not leave this blank.");
                return false;
            }
        }
    });
    return newPrompt;
}

// Prompts for engineer (can occur as many times as the user keeps adding more engineers)
let engineerPrompt = () => {
    let newPrompt = [];

    console.log("~~~~~~~~~~~~~~~~~~\nAdding an Engineer\n~~~~~~~~~~~~~~~~~~");
    newPrompt = employeePrompts.concat({
        type: "input",
        message: "Please enter the GitHub username of the engineer:",
        name: "github",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please do not leave this blank.");
                return false;
            }
        }
    });
    return inquirer.prompt(newPrompt)
        .then(({ name, id, email, github }) => {
            employees.push(new Engineer(name, id, email, github));
            return addTeamMember(employees);
        });
}

// Prompts for intern (can occur as many times as the user keeps adding more interns)
let internPrompt = () => {
    let newPrompt = [];

    console.log("~~~~~~~~~~~~~~~~~~\nAdding an Intern\n~~~~~~~~~~~~~~~~~~");
    newPrompt = employeePrompts.concat({
        type: "input",
        message: "Please enter the school the intern goes/went to:",
        name: "school",
    });
    return inquirer.prompt(newPrompt)
        .then(({ name, id, email, school }) => {
            employees.push(new Intern(name, id, email, school));
            return addTeamMember(employees);
        });
}

// Begin program:
inquirer.prompt(managerPrompt())
    // This prompts questions for the manager first then prompts questions for any more team members
    .then(({ name, id, email, officeNumber }) => {
        employees.push(new Manager(name, id, email, officeNumber));
        return addTeamMember(employees);
    })
    // After prompts are finished, the  html content is generated using the functions from ./src/page.template.js file
    .then(htmlContent => {
        return generatePage(htmlContent);
    })
    // After page is generated, the content is written and saved as an HTML file in the dist folder
    .then(htmlFile => {
        return writeHTML(htmlFile);
    })
    // Console logs any errors found
    .catch(err => {
        console.log(err);
    });