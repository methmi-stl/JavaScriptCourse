import fs from 'node:fs/promises';

// import sample data
// import data from './employeeData.json' with { type: 'json' };
// const employees = data.employees ?? [];

import createPrompt from 'prompt-sync';
// Global Variables-----------------------
let employees = [];
let currencyData;

const API_KEY = 'b017633e2cb067ab687a3a99fde66180';

const getCurrencyConversionData = async () => {
  const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`;

  const options = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Cannot fetch currency data.');
    }

    currencyData = await response.json();
    console.log('Success:', currencyData);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Call the function
getCurrencyConversionData();

// Loading and writing data to the filesystem ------------------

const loadData = async () => {
  console.log('--Loading Employee Data --');
  try {
    const fileData = await fs.readFile('./employeeData.json', 'utf-8');
    const parsedData = JSON.parse(fileData);

    // Ensure we get the array inside the objectno
    employees = (parsedData.employees || []).map((emp) => ({
      id: emp.id,
      firstName: emp.FIRST_NAME || emp.firstName, // Handles both styles
      lastName: emp.LAST_NAME || emp.lastName,
      isActive: emp.isActive,
      // ... map other fields as needed
    }));
  } catch (err) {
    console.error('----Cannot load in employees---');
    throw err;
  }
};

const writeData = async () => {
  console.log('--Writing Emplyees Data--');
  try {
    await fs.writeFile('./data.json', JSON.stringify(employees, null, 2));
  } catch (err) {
    console.error('Cannot load in employees');
    throw err;
  }
};
const prompt = createPrompt();

const logEmployee = (employee) => {
  Object.entries(employee).forEach((entry) => {
    console.log(`${entry[0]}: ${entry[1]}`);
  });
};

function getInput(promptText, validator, transformer) {
  const value = prompt(promptText);
  if (validator && !validator(value)) {
    console.error('----------Invalid Input------------');
    return getInput(promptText, validator, transformer);
  }
  if (transformer) {
    return transformer(value);
  }
  return value;
}

const transformBooleanValue = (input) => input === 'yes';

const getNextEmployeeID = () => {
  if (employees.length === 0) return 1;
  const ids = employees.map((e) => e.id);
  return Math.max(...ids) + 1; // Added spread operator (...)
};

// Validator Functions ----------------------------------------

const isCurrencyCodeValid = function (code) {
  const currencyCodes = Object.keys(currencyData.rates);
  return (currencyCodes.indexOf(code) > -1);
};

const isStringInputValid = (input) => typeof input === 'string' && input.trim().length > 0;

const isBooleanInputValid = function (input) {
  return input === 'yes' || input === 'no';
};

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

const isIntegerValid = (min, max) => (input) => {
  const numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < min || numValue > max) {
    return false;
  }
  return true;
};
// Application Execution --- -------------------

function listEmployees() {
  /*
     for (const emp of employees) {
      for (const property in emp) {
        console.log(`${property}: ${emp[property]}`);
      }
      console.log('');
      prompt('Press enter to continue..');
    }
      */
  employees.forEach((e) => {
    logEmployee(e);
    prompt('\nPress Enter to Continue ...\n');
  });

  console.log('Employee list is completed');
}

async function addEmployees() {
  // create new employee object
  const newEmployee = {};
  newEmployee.id = getNextEmployeeID();
  newEmployee.firstName = getInput('First Name :- ', isStringInputValid);
  newEmployee.lastName = getInput('Last Name:- ', isStringInputValid);
  const startdateYear = getInput(
    'Employee Start Year :- (1990-2025) :- ',
    isIntegerValid(1990, 2025),
  );
  const startDateMonth = getInput(
    'Employee Start Date Month (1-12) :- ',
    isIntegerValid(1, 12),
  );
  const startDateDay = getInput(
    'Employee Start Date Day (1-31) :- ',
    isIntegerValid(1, 31),
  );
  newEmployee.startDate = new Date(
    startdateYear,
    startDateMonth - 1,
    startDateDay,
  );
  newEmployee.isActive = getInput(
    'Is employee active (yes or no) :- ',
    isBooleanInputValid,
    transformBooleanValue,
  );

  employees.push(newEmployee);
  await writeData();
  // output employee JSON
  console.log(JSON.stringify(newEmployee, null, 2));
}

// search for employees by id

function searchById() {
  const id = getInput('Enter Employee ID :- ', null, Number);
  const result = employees.find((e) => e.id === id);
  if (result) {
    console.log('');
    logEmployee(result);
  } else {
    console.log('No Results...');
  }
}

// search by name

function searchByName() {
  const firstNameSearch = getInput('First Name :- ').toLowerCase();
  const lastNameSearch = getInput('Last Name :- ').toLowerCase();

  const results = employees.filter((e) => {
    // Note the camelCase property names
    const matchFirst = firstNameSearch
      ? e.firstName.toLowerCase().includes(firstNameSearch)
      : true;
    const matchLast = lastNameSearch
      ? e.lastName.toLowerCase().includes(lastNameSearch)
      : true;
    return matchFirst && matchLast;
  });

  results.forEach((e, idx) => {
    console.log(`\nResult ${idx + 1} :-`);
    logEmployee(e);
  });
}
// ----Application EXECUTION STARTS HERE ----------------

const main = async () => {
  // Get the command the user wants to execute
  const command = (process.argv[2] || '').toLowerCase();

  switch (command) {
    case 'list':
      console.log('Employee List ------------------------\n');
      listEmployees();
      break;

    case 'add':
      console.log('Add Employee -------------------------\n');
      await addEmployees();
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
};

loadData()
  .then(main)
  .catch((err) => {
    console.error('Cannot complete startup');
    throw err;
  });
