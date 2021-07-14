const inquirer = require('inquirer');
const genMarkD = require("./utils/generateMarkdown.js");
const fs = require('fs');
valid = (input)=> {
    if(input) {
        return true;
    }
    return "Please fill in";
}




// TODO: Create an array of questions for user input
const questionsArr = [
    {
        message: 'Please enter your projects title',
        name: "title",
        type: "input",
        validate: valid,
    },
    {
        message: "Why did you build this project?",
        name: "question1",
        type: "input",
        validate: valid,
    },
    {
        message: "What was your motivation?",
        name: "question2",
        type: "input",
        validate: valid,
    },
    {
        message: "What problem/s does it solve?",
        name: "question3",
        type: "input",
        validate: valid,
    },
    {
        message: "What did you learn?",
        name: "question4",
        type: "input",
        validate: valid,
    },
    {
        message: "What were the main challenges you faced?",
        name: "question5",
        type: "input",
        validate: valid,
    },
    {
        message: "What future features could you incorperate in future development?",
        name: "question6",
        type: "input",
        validate: valid,
    },
    {
        message: "How to install this application",
        name: "Installation",
        type: "input",
        validate: valid,
    },
    {
        message: "List the features or technologies used in this application",
        name: "Technologies",
        type: "input",
        validate: valid,
    },
    /*{
        message: "What licence does the project have?",
        name: "Licence",
        Choices: ["MIT", "Apache 2.0", "ISC", "None"],
        type: "list",
        validate: valid,
    },*/
    {
        message: "Supply your github username and email for contact purposes",
        name: "contact",
        type: "input",
        validate: valid,
    },
    {
        message: "How can people contribute?",
        name: "contributions",
        type: "input",
        validate: valid,
    },
];


function askedQuestion(questions){
    inquirer.prompt(questions)
    .then((answers) => {
    writeToFile("newREADME.md", answers);
    });
}

//TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, )
};

// TODO: Create a function to initialize app
function init() {
    askedQuestion(questionsArr);
};

init();