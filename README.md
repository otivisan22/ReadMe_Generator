Licensed under the [Gnu GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html).

# README_GENERATOR

Our task was to build a readme generator in order to quickly create a readme generator for a new project.
The readme generator will display the title of the project blended together with Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions. Firstly, the readme generator will display the tile of my project alongside with the description, installation instructions, usage, contributors, any test needed, questions. Secondly, when it comes to the licenses will render a list of licenses alongside with the badge of the license which will be added on top of the readme. Also, after entering the github username the readme generated should direct the user to the github link and after entering the email address the user will be directed to a section called questions for further additional information or questions.

---

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/otivisan22/README_GENERATOR
    $ cd README_GENERATOR
    $ yarn install

## Configure app

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting;
- Another setting;
- One more setting;

## Running the project

    $ yarn start

## Simple build for production

    $ yarn build

## Link to the deployed application https://otivisan22.github.io/team-profile-generator/
