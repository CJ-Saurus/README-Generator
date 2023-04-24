// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message: "Name of your project?",
},
{
    type: "input",
    name: "description",
    message: "Provide a description of this project.",
},
{
    type: "input",
    name: "screenshot",
    message: "Provide the path for the image you want to use for your screenshot.",
},
{
    type: "input",
    name: "link",
    message: "Provide a URL where a user can view deployed application.",
},
{
    type: "checkbox",
    name: "license",
    choices: ["MIT", "Apache2.0", "none"],
},
{
    type: "input",
    name: "credits",
    message: "List any contributors"
},
{
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();