// Import JSON data from employeeData.json as a JavaScript object
// Because "type": "module" is set in package.json, ES module syntax is used
import data from './employeeData.json' with { type: 'json' };

// Extract the 'employees' array from the imported data object
// data = { employees: [ ... ] }
const { employees } = data;

// Initialize a counter variable to track the current index
let i = 0;

// Loop runs as long as an employee exists at the current index
while (employees[i]) {

  // Print employee number (index + 1) and the employee's first and last name
  console.log(
    `Employee ${i + 1} :- ${employees[i].FIRST_NAME} ${employees[i].LAST_NAME}`
  );

  // Move to the next employee in the array
  i++;
}

console.log(`Total Employees: ${i}`);
console.log ("\n-----------------------------------\n");

//Do while loop
i=0;
do{
    console.log(`Employee ${i + 1} :- ${employees[i].FIRST_NAME} ${employees[i].LAST_NAME}`);
    i++;
}while(employees[i]);

console.log(`Total Employees : ${i}`);
console.log(`\n ----------------------------------------\n`);
