// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "APACHE_2.0") {
    return "Licensed under the [Apache License](https://www.apache.org/licenses/LICENSE-2.0).";
  }
  if (license === "MIT") {
    return "![mit license](https://img.shields.io/badge/license-MIT-green)";
  }
  if (license === "GPL_3.0") {
    return "![Gnu GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)";
  }
  if (license === "BSD_3") {
    return "Licensed under the [The 3-Clause BSD](https://opensource.org/licenses/BSD-3-Clause).";
  }
  if (license === "None") {
    return "No License";
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  

## Description 
${data.description}

## Table of Contents

- [Project Title](#project-title)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributors}

## Tests
${data.tests}

For any questions please contact the developer on the github link 

https://github.com/${data.username}/ReadMe_Generator

You can email me at: ${data.email}


`;
};

module.exports = generateMarkdown;
