import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    // Editor instead of input for longer answers
    // When prompted with the Editor option, press the Enter button, and a text editor will open up.
    // If you are on Mac, you will be prompted to choose an editor.
    // If you are on Windows, you will be prompted to choose an editor or download a new editor.
        {
      type: 'input',
      //Title of the Project
      name: 'title',
      message: 'Project title: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
        
      }},
      {
      type: 'editor',
      //Description of the Project
      //Provide a short description explaining the what, why, and how of your project. Use the following questions to guide your writing:
      //What was your motivation?
      //Why did you build this project?
      //What problem does it solve?
      //What did you learn?
      //What makes your project stand out?
      name: 'description',
      message: 'Project description: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }
      }},
      {
      type: 'editor',
      //Installation instructions
      //What are the steps required to install your project? 
      //Provide a step-by-step description of how to get the development environment running.
      name: 'installation',
      message: 'Installation instructions: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your installation instructions!');
          return false;
        }
      }},
      {
      type: 'editor',
      //Usage information
      //Provide instructions and examples for use.
      name: 'usage',
      message: 'Usage information: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your usage information!');
          return false;
        }
      }},
      {
        type: 'editor', //Editor instead of input just in case the user wants to add more than one screenshot
        //Provide file paths for screenshots for usage if applicable
        name: 'screenshots',
        message: 'Provide file paths for screenshots (separate with commas):',
        filter: (input) => {
          return input.split(',').map((path) => path.trim());
        },
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log('Please provide at least one file path for your screenshots or leave blank.');
            return false;
          }
        }
      },
      {
      type: 'editor',
      //Contribution guidelines
      //List your collaborators, if any, with links to their GitHub profiles.
      //If you used any third-party assets that require attribution
      //List the creators with links to their primary web presence in this section.
      name: 'contributing',
      message: 'Contribution guidelines: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your contribution guidelines!');
          return false;
        }
      }},
      {
      type: 'editor',
      name: 'tests',
      //Test instructions
      message: 'Test instructions: (optional)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your test instructions!');
          return false;
        }
      }},
      {
      type: 'list',
      //License
      //The license you want to use for your project
      name: 'license',
      message: 'License: (Required)',
      choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None'],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please select a license!');
          return false;
        }
      }},
      {
      type: 'editor',
      //GitHub username(s)
      //Provide your GitHub username
      name: 'username (Required)',
      message: 'GitHub username: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }},
      {
        //If there are different, contributors, add them here
      type: 'editor',
      name: 'questions',
      message: 'Questions: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your questions!');
          return false;
        }
      }
  }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    const response = generateMarkdown(answers);
    console.log(response);
    fs.writeFile('README.md', response, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
