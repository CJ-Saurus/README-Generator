// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require(".utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message: "Name of your project"
},
{
    type: "input",
    name: "description",
    message: ""
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();