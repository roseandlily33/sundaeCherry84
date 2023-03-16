// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description:
  ${data.description}

  ## Table of Contents:
  -[Instillation] (#instillation)
  -[Usage] (#usage)
  -[License] (#license)
  -[Contributing] (#contributing)
  -[Tests] (#tests)
  -[Questions](#questions)

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}

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

module.exports = generateMarkdown;
