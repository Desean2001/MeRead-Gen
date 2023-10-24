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
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of contents
  1. [Installation Instructions](#installation)<br>
  2. [Usage Information](#usage)<br>
  3. [Contribution Guidelines](#contribution)<br>
  4. [Test Instructions](#test)<br>
  5. [Questions](#questions)<br>

  <a name="installation"></a>
  ## Installation Instructions
  #### ${data.installation}

  <a name="usage"></a>
  ## Usage Information
  #### ${data.usage}

  <a name="contribution"></a>
  ## Contribution Guidelines
  #### ${data.contributing}

  <a name="test"></a>
  ## Test Instructions
  #### ${data.test}

  <a name="questions"></a>
  ## Questions
  #### Github Username - ${data.github}
  #### Email - ${data.email}
`;
}

module.exports = {generateMarkdown};
