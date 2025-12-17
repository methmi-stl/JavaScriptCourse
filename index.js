import fs from 'node:fs/promises';
//Global Variables-----------------------





// import sample data
import data from './employeeData.json' with { type: 'json' };
const employees = data.employees ?? [];

import createPrompt from 'prompt-sync';
let prompt = createPrompt();

const logEmployee=(employee)=>{
  Object.entries(employee).forEach(entry => {
    console.log(`${entry[0]}: ${entry[1]}`);
  });
}

function getInput(promptText, validator, transformer){
    let value = prompt(promptText);
    if(validator && !validator(value)){
        console.error("----------Invalid Input------------");
        return getInput(promptText,validator,transformer);
    }
    if(transformer){
      return transformer(value);
    }
    return value;
}

const transformBooleanValue =(input) =>{
  return (input === "yes");
}

//Validator Functions ----------------------------------------

const isStringInputValid = input =>
  typeof input === 'string' && input.trim().length > 0;


const isBooleanInputValid = function(input){
    return(input ==="yes" || input ==="no");
}

/*
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
*/

const isIntegerValid = (min, max) => {
  return (input) => {
    let numValue = Number(input);
    if (!Number.isInteger(numValue) || numValue <min || numValue > max){
        return false;
    }
    return true;
  }
}
//Application Execution --- -------------------

function listEmployees(){
  /*
     for (const emp of employees) {
      for (const property in emp) {
        console.log(`${property}: ${emp[property]}`);
      }
      console.log('');
      prompt('Press enter to continue..');
    }
      */
     employees.forEach(e => {
      logEmployee(e);
      prompt("\nPress Enter to Continue ...\n");
     });

    console.log('Employee list is completed');
}

function addEmployees(){
     // create new employee object
    let newEmployee = {};
    newEmployee.firstName = getInput("First Name :- ", isStringInputValid);
    newEmployee.lastName = getInput("Last Name:- ", isStringInputValid);
    let startdateYear = getInput("Employee Start Year :- (1990-2025) :- ", isIntegerValid(1990,2025));
    let startDateMonth = getInput("Employee Start Date Month (1-12) :- ", isIntegerValid(1,12));
    let startDateDay = getInput("Employee Start Date Day (1-31) :- ", isIntegerValid(1,31));
    newEmployee.startDate = new Date(startdateYear, startDateMonth-1,startDateDay);
    newEmployee.isActive = getInput("Is employee active (yes or no) :- ", isBooleanInputValid,transformBooleanValue);

    
    // output employee JSON
    console.log(JSON.stringify(newEmployee, null, 2));
}

// search for employees by id 

function searchById(){
  const id = getInput("Enter Employee ID :- ", null, Number);
  const result = employees.find (e=> e.id === id);
  if(result){
    console.log("");
    logEmployee(result);
  }else{
      console.log("No Results...");
    }
  }

//search by name

function searchByName(){
  const firstNameSearch = getInput("First Name :- ").toLowerCase();
  const lastNameSearch = getInput("Last Name :-").toLowerCase();
  const results =employees.filter(e=>{
    if(firstNameSearch && !e.FIRST_NAME.toLowerCase().includes(firstNameSearch)){
      return false;
    };
    if(lastNameSearch && !e.LAST_NAME.toLowerCase().includes(lastNameSearch)){
      return false;
    }
    return true;
  });

  results.forEach((e,idx)=>{
    console.log("");
    console.log(`Result ${idx +1} :-`);
    logEmployee(e);
  });``
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

  case 'search-by-id':
    console.log('Search Employee By ID ----------------\n');
    searchById();
    break;

  case 'search-by-name':
    console.log('Search By Name ----------------\n');
    searchByName();
    break;

  default:
    console.log('Unsupported command. Use: list | add');
    process.exit(1);
}
