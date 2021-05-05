// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//licenses

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the name of the project?",
  },

  {
    type: "list",
    name: "license",
    message: "What type of licenses would you like?",
    choices: ["APACHE_2.0", "MIT", "GPL_3.0", "BSD_3", "None"],
  },

  {
    type: "input",
    name: "description",
    message: "Please give a short description of your application?",
  },

  {
    type: "input",
    name: "installation",
    message: "What do you need to install so that the application will work?",
  },

  {
    type: "input",
    name: "usage",
    message: "Which are the steps for using your application?",
  },

  {
    type: "input",
    name: "tests",
    message: "How would you run tests on this project?",
  },

  {
    type: "list",
    name: "contributors",
    message: "Would you like other developers to work on this project?",
    choices: ["Yes", "No"],
  },

  {
    type: "input",
    name: "questions",
    message: "Can you provide me your github username?",
  },

  {
    type: "input",
    name: "questions",
    message: "Do you have an email address?",
    choices: ["Yes", "No"],
  },
];

// TODO: Create a function to write README file
// function err
const writeToFile = (data) => {
  const callback = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated ReadMe has been created successfully");
    }
  };

  fs.writeFile("GENERATED_README.md", data, callback);
};

// TODO: Create a function to initialize app
const init = async () => {
  const answers = await inquirer.prompt(questions);

  console.log(answers);

  const markdown = generateMarkdown(answers);

  console.log(markdown);
  writeToFile(markdown);
};

// Function call to initialize app
init();
