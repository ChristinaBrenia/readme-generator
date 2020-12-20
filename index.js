// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.prompt(

 [
     // Question 1 
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
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
    // Question 2
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
        //Question 3
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
        //Question 4
        {
            type:'input',
            name: 'credits',
            message:'Any credits?',
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
        //Question 5: List of license
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
        //Question 6
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
    installation,
    instructions,
    credits,
    license,
    git,
    linkden,
    usage,
    contribution,
    email,
})=>{
    // Readme template
    const template = `
# ${title}
    
* [Installation] (#installation)
* [Usage] (#usage)
* [contribution] (#contribution)
* [Credits] (#credits)
* [License] (#license)
* Installation
 ${installation}
 ## Usage
 ${usage}
 ## Contribution
 ${contribution}
 ### instructions
 ${instructions}
 ## Credits
 ${credits}
 ## License
 ${license}

 # Contact
 * GitHub: ${git}
 * Linkedin: ${linkden}
 * E-mail: ${email}
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
