// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.prompt(

 [
     // Question title of project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?(Please seperate words with "-")',
        validate: (value) => 
        {
            if (value) 
            {
                return true;
            }
            else 
            {
                return 'A value is needed to continue';
            }
        }
    },
    //Question : Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
        validate: (value) => 
        {
            if (value) 
            {
                return true;
            }
            else 
            {
                return 'A value is needed to continue';
            }
        }
    },
    // Question : Installation
        {
            type:'input',
            name: 'installation',
            message:'How is you application installed?',
            validate: (value) => 
            {
                if (value) 
                {
                    return true;
                }
                else 
                {
                    return 'A value is needed to continue';
                }
            }
            
        },
        //Question : Instructions
        {
            type:'input',
            name: 'instructions',
            message:'Provide any instructions needed:',
            validate: (value) => 
        {
            if (value) 
            {
                return true;
            }
            else 
            {
                return 'A value is needed to continue';
            }
        }
        },
        //Question : Credits
        {
            type:'input',
            name: 'credits',
            message:'How can someone contribute?',
            validate: (value) => 
        {
            if (value) 
            {
                return true;
            }
            else 
            {
                return 'A value is needed to continue';
            }
        }
        },
        //Question : List of license
        {
            type:'list',
            name: 'license',
            message:'What license did you use?',
            choices: ['The MIT License', 'The GPL License', 'Apache license', 'GNU license', 'N/A'],
            validate: (value) => 
        {
            if (value) 
            {
                return true;
            }
            else 
            {
                return 'A value is needed to continue';
            }
        }
        },

        //Question : Usage
        {
            type:'input',
            name: 'usage',
            message:'Provide any instructions or examples of your project in use:' ,
            validate: (value) => 
        {
            if (value) 
            {
                return true;
            }
            else 
            {
                return 'A value is needed to continue';
            }
        }
        },

        //Question : Test
        {
            type:'input',
            name: 'test',
            message:'Provide any written test for your application (if applicable)',
            validate: (value) => 
        {
            if (value) 
            {
                return true;
            }
            else 
            {
                return 'A value is needed to continue';
            }
        }
        },

        //Question : Questions
        {
            type:'input',
            name: 'questions',
            message:'Provide the best way to contact you if someone has questions:',
            validate: (value) => 
        {
            if (value) 
            {
                return true;
            }
            else 
            {
                return 'A value is needed to continue';
            }
        }
        },
        //Question : github
        {
            type:'input',
            name: 'git',
            message:'What is your GitHub username?',
            validate: (value) => 
        {
            if (value) 
            {
                return true;
            }
            else 
            {
                return 'A value is needed to continue';
            }
        }
        },
        //Question :linkden
        {
            type:'input',
            name: 'linkden',
            message:'What is your Linkedin profile name?',
            validate: (value) => 
        {
            if (value) 
            {
                return true;
            }
            else 
            {
                return 'A value is needed to continue';
            }
        }
        },
        //Question 7
        {
            type:'input',
            name: 'email',
            message:'What is your email address?',
            validate: (value) => 
        {
            if (value) 
            {
                return true;
            }
            else 
            {
                return 'A value is needed to continue';
            }
        }
    }
        
    
]).then (({
    title,
    description,
    installation,
    instructions,
    credits,
    license,
    questions,
    git,
    linkden,
    usage,
    test,
    email,
})=>{
    // Readme template
    const template = `
# ${title}
application is covered under${license}

## Description
${description}

Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [contribution](#contribution)
* [License](#license)

## Installation
 ${installation}
 ## Usage
 ${usage}
 ## Contribution
 ${credits}
 ## Test
 ${test}
 ## instructions
 ${instructions}
 ## License
 This application is covered under the following license
 ${license}

 # Questions
 * GitHub: https://github.com/${git}
 * Linkedin: ${linkden}
 * E-mail: ${email}
 * Contact instructions: ${questions}
    `;
    
    // Que function to write new ReadMe file
    writeToFile(title,template);
}
)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    //I don't understand this part.. will have to re-visit this in the future
fs.writeFile(`./${fileName.toLowerCase().split(' ').join(' ')}.md`, data, (err)=>
    {
        if(err) {
            console.log(err)
        }
        console.log('Your ReadMe file has been generated');
    })

}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
