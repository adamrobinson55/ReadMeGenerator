// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What was your motivation when creating this project?',
        name: 'motivated'
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'why'
    },
    {
        type: 'input',
        message: 'What problem does this project solve?',
        name: 'problem'
    },
    {
        type: 'input',
        message: 'What did you learn when developing this project?',
        name: 'learn'
    },
    {
        type: 'input',
        message: 'What are the steps to install your project?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'What are some examples of how to use this project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'credits'
    },
    {
        type: 'list',
        message: 'What license does your project have?',
        name: 'license',
        choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU']
    },
    {
        type: 'input',
        message: 'How could someone contribute to your project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What are some tests users can run?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your gitHub Username?',
        name: 'github'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data),
        (err) => {
            err ? console.log('error') : console.log('nice')
        })
}


// TODO: Create a function to initialize app
async function init() {
    try{
    let userInput = await inquirer.prompt(questions)

    writeToFile('README.MD', userInput)
    } catch(error){
        console.log(error)
    }
}

// Function call to initialize app
init();
