// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){return ""}
  switch(license) {
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    case 'Creative Commons':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    case 'Eclipse':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    case 'GNU':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){return ""}
  switch(license) {
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0'
    case 'Boost':
      return 'https://www.boost.org/LICENSE_1_0.txt'
    case 'BSD':
      return 'https://opensource.org/licenses/BSD-3-Clause'
    case 'Creative Commons':
      return 'http://creativecommons.org/publicdomain/zero/1.0/'
    case 'Eclipse':
      return 'https://opensource.org/licenses/EPL-1.0'
    case 'GNU':
      return 'https://www.gnu.org/licenses/gpl-3.0'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){return ""}
  return renderLicenseLink(license)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `  
# ${data.title}

  ${renderLicenseBadge(data.license)}
## Description

  ${data.motivated}. ${data.why}. 
  ${data.problem}. ${data.learn}.

## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
## Installation
  ${data.install}
## Usage
  ${data.usage}
## Credits
  ${data.credits}
## License
  ${renderLicenseSection(data.license)}
## How to Contribute
  ${data.contribution}
## Tests
  ${data.tests}
## Questions
  ${data.github}`
}

module.exports = generateMarkdown;
