// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require ("fs");
const generateMarkdown = require ("./utils/generateMarkdown.js");


//licenses

const apache = "Licensed under the [Apache License] (https://www.apache.org/licenses/LICENSE-2.0).";
const mit =  "Licensed under the [mit License](https://opensource.org/licenses/MIT).";
const gnu = "Licensed under the [Gnu GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html).";
const bsd = "Licensed under the [The 3-Clause BSD] (https://opensource.org/licenses/BSD-3-Clause).";


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input";
    name: "title";
    message: "What's the name of the project?"
  },

  {
    type: "list";
    name: "license";
    message: "What type of licenses would you like?"
    choices: [
      "APACHE_2.0",
      "MIT",
      "GPL_3.0",
      "BSD_3", 
      "None"]
  },

  {
    type: "input";
    name: "description";
    message: "Can you resume your project?"
  },

  {
    type: "input";
    name: "installation";
    message: "What do you need to install so that the application will work?"
  },

  {
    type: "input";
    name: "usage";
    message: "Which are the steps for using your application?"
  },

  {
    type: "input";
    name: "tests";
    message: "How would you run tests on this project?"
  },

  {
    type: "list";
    name: "contributors";
    message: "Would you like other developers to work on this project?"
    choices: [
      "Yes",
      "No"
    ]
  },
];

// TODO: Create a function to write README file
// function err
const writeToFile = (fileName, data) => {
  
};

// TODO: Create a function to initialize app
const init = () => {};

// Function call to initialize app
init();
