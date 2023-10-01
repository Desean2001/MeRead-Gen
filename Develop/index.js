// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter your installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your usage information.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter your contributing guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter your test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license: If none then NA.',
        choices: ['Apache license 2.0', 'MIT', 'NA'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

