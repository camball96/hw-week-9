// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(licence === "None") return "";
  else if (licence === "MIT") return "https://img.shields.io/badge/License-MIT-green.svg";
  else if (licence === "ISC") return "https://img.shields.io/badge/License-ISC-green.svg";
  else if (licence === "Apache 2.0") return "https://img.shields.io/badge/License-Apache%202.0-green.svg";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## Licence\n![${licence}](${renderLicenseLink(licence)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseSection(data.licence)}

## Contents
- [Description](#description)
- [Installation](#installation)
- [Technologies](#technologies)
- [Licence](#licence)
- [Contact](#contact)
- [Contributions](#contributions)


  ## Description
  \nA little on why I built this project was because: ${data.question1}

  \nWhat motivated me to build this project was: ${data.question2}

  \nThe problems I managed to solve by building this application included: ${data.question3}

  \nHere's a little on what I learnt whilst building this application: ${data.question4}

  \nSome of the main challenges I face included: ${data.question5}

  \nI would like to incorperate some of the following features in future development: ${data.question6}

## Installation
\nTo install this application simply: ${data.installation}

## Technologies
\nSome of the technologies or features this application displays includes: ${data.technologies}

## Contact
\nYou can reach out or see more on my projects by contacting me on the following: ${data.contact}

## Contributions
\n${data.contributions}

## Acknowledgements
\n
`;
}

module.exports = generateMarkdown;
