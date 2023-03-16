// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
const requiredMarkdown = require('./Develop/utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
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
        message: 'What kinds of tests have you done?',
        name: 'tests'
    },

    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github'
    },
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile( filename, data, err => {
        err ? console.error(err): console.log('Your readme has been made!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response)=> {
        const answers = generateMarkdown(response);
     writeToFile('readMeExample.md', answers);
    })
   
}

// Function call to initialize app
init();


//Makes it cyan: ooooooo
const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);