console.log("hello from node JS");
// import inquirer library //
const inquirer = require("inquirer");

// list includes all the questions to prompt the user //
const mainQuestions = [
  {
    type: "input",
    name: "title",
    message: "Please type a title of your project. (Required)",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project. (Required)",
  },
  {
    type: "input",
    name: "installation",
    message: "Does your project require an installation process? (Required)",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your application? (Required)",
  },
  {
    type: "list",
    name: "license",
    message: "Does your project require a license? (Required)",
    choices: ["Apache", "GNU", "MIT", "No license"],
  },
  {
    type: "input",
    name: "contributors",
    messages: "Please enter all of the contributors. (Required)",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter the test process for your application. (Required)",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your GitHub email address. (Required)",
  },
];

const generateReadMe = (answers) => {
  // console.log("answers: " + JSON.stringify(answers)); //

  return `# Title: ${answers.title} ![MIT](https://img.shields.io/badge/${answers.license}-License-green)
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Description
  ${answers.title}
  ## Installation
  Please follow the instructions below:
  \`\`\`
  ${answers.usage}
  \`\`\`
  ## Usage
  Please follow the instructions below:
  \`\`\`
  npm run start
  \`\`\`
  ## License
  ${answers.license}
  ## Contributing
  ${answers.contributors}
  ## Tests
  Please follow the instructions below:
  \`\`\`
  ${answers.tests}
  \`\`\`
  ## Questions
  Please contact me on my email: ${answers.email}
  `;
};

// declare your init function to ask questions
const init = async () => {
  // get the answers for first set of questions
  const answers = await inquirer.prompt(mainQuestions);

  // then Generate the Readme file
  const readMe = generateReadMe(answers);
};

// start the application
init();
