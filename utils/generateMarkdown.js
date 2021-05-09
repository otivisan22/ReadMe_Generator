// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "APACHE_2.0") {
    return "![apache_2.0 license](https://img.shields.io/badge/license-APACHE_2.0-green)";
  }
  if (license === "MIT") {
    return "![mit license](https://img.shields.io/badge/license-MIT-green)";
  }
  if (license === "GPL_3.0") {
    return "![gpl_3.0 license](https://img.shields.io/badge/license-GPL_3.0-green)";
  }
  if (license === "BSD_3") {
    return "![bsd_3 license](https://img.shields.io/badge/license-BSD_3-green)";
  }
  if (license === "None") {
    return "";
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

##Questions

For any questions please contact the developer on the github link 

https://github.com/${data.username}/ReadMe_Generator

You can email me at: ${data.email}


`;
};

module.exports = generateMarkdown;
