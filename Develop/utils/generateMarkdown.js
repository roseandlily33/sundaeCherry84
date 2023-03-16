// Switch statement to go through the licenses:
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`; break;
    case 'Apache': return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`; break;
    case 'GPLv2': return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`; break;
    case 'GPLv3': return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`; break;
    case 'BSD 3-clause': return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`; break;
    case 'Unlicense': return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`; break;
    default: return ''; break;
  }
}
//Gives a desription about what the badge means:
function renderLicenseDescription(license) {
  switch (license) {
    case 'MIT': return `MIT license lets you do as you want as long as you include the original copyright, and license notice is any copy that you make`; break;
    case 'Apache': return `Apache license lets you do what you want as long as you include the permissive license. `; break;
    case 'GPLv2': return `GPLv2 allows you to copy, distribute and modify software as long as you track changes, dates in the source files. Any modifications must be available under the GPL with build and install instructions. `; break;
    case 'GPLv3': return `GPLv3 allows you to copy, distribute and modify software as long as you track changes, dates in the source files. Any modifications must be available under the GPL with build and install instructions.`; break;
    case 'BSD 3-clause': return `BSD 3-clause allows you unlimited freedom as long as you include the BSD copyright and license notice. `; break;
    case 'Unlicense': return `This repository does not have any license associated with it. `; break;
    default: return ''; break;
  }
}

// Generate the template for the README:
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description:
  ${data.description}

  ## Table of Contents:
  - [Instillation](#instillation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Instillation: 
  ${data.instillation}
 
  ## Usage:
  ${data.usage}

  ## License:
  ${renderLicenseDescription(data.license)}

  ## Contributing:
  ${data.contributing}

  ## Tests:
  ${data.tests}

  ## Questions:
  For any questions please reach out to me at:
  GitHub: https:/github.com/${data.github}
  Email: ${data.email}
`;
}
//Exports to index.js
module.exports = generateMarkdown;
