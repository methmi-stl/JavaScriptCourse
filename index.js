// import sample data
import data from './employeeData.json' with { type: 'json' };
const employees = data.employees ?? [];

import createPrompt from 'prompt-sync';
let prompt = createPrompt();


function getInput(promptText, validator, transformer){
    let value = prompt(promptText);
    if(validator && !validator(value)){
        console.error("----------Invalid Input------------");
        process.exit(1);
    }
    if(transformer){
    value = transformer(value);
}

    return value;
}

//Validator Functions ----------------------------------------

const isStringInputValid = input =>
  typeof input === 'string' && input.trim().length > 0;


const isBooleanInputValid = function(input){
    return(input ==="yes" || input ==="no");
}
const isStartYearValid = function(input){
    let numValue = Number(input);
    if(!Number.isInteger(numValue) || numValue <1990 || numValue>=2025){
        return false;
    }
    return true;
}

const isStartMonthValid = input => {
  const num = Number(input);
  return Number.isInteger(num) && num >= 1 && num <= 12;
};

const isStartDayValid = input => {
  const num = Number(input);
  return Number.isInteger(num) && num >= 1 && num <= 31;
};

//Application Execution --- -------------------

function listEmployees(){
     for (const emp of employees) {
      for (const property in emp) {
        console.log(`${property}: ${emp[property]}`);
      }
      console.log('');
      prompt('Press enter to continue..');
    }

    console.log('Employee list is completed');
}

function addEmployees(){
     // create new employee object
    let newEmployee = {};
    newEmployee.firstName = getInput("First Name :- ", isStringInputValid);
    newEmployee.lastName = getInput("Last Name:- ", isStringInputValid);
    let startdateYear =getInput("Employee Start Year :- (1990-2025) :- ", isStartYearValid);
    let startDateMonth = getInput("Employee Start Date Month (1-12) :- ", isStartMonthValid);
    let startDateDay = getInput("Employee Start Date Day (1-31) :- ", isStartDayValid);
    employee.startDate = new Date(startdateYear, startDateMonth-1,startDateDay);
    employee.isActive = getInput("Is employee active (yes or no) :- ", isBooleanInputValid);


 
    // output employee JSON
    console.log(JSON.stringify(newEmployee, null, 2));
}

// Get the command the user wants to execute
const command = (process.argv[2] || '').toLowerCase();

switch (command) {
  case 'list':
    console.log('Employee List ------------------------\n');
    listEmployees();
    break;

  case 'add':
    console.log('Add Employee -------------------------\n');
    addEmployees();
    break;

  default:
    console.log('Unsupported command. Use: list | add');
    process.exit(1);
}
