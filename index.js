//Required Librares:
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
const requiredMarkdown = require('./Develop/utils/generateMarkdown.js');

// Questions Array:
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },

    {
        type: 'input',
        message: 'Description of your project:',
        name: 'description'
    },

    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'instillation'
    },

    {
        type: 'input',
        message: 'How do you use your project?',
        name: 'usage'
    },

    {
        type: 'input',
        message: 'How can other people contribute?',
        name: 'contributing'
    },

    {
        type: 'input',
        message: 'Test Instructions',
        name: 'tests'
    },

    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3', 'BSD 3-clause' ,'Unlicense'],
    },
];

// Function that writes to a file:
function writeToFile(filename, data) {
    fs.writeFile( filename, data, err => {
        err ? console.error(err): console.log('Your readme has been made!');
    })
}

// Starts inquirer and writes it to a readMeExample.md file with response given in terminal:
function init() {
    inquirer.prompt(questions).then((response)=> {
        const answers = generateMarkdown(response);
        writeToFile('readMeExample.md', answers);
    })  
}

init();