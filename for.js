// for.js
import employeeData from './employeeData.json' with { type: 'json' };

const names = ["David", "Kabeer", "Piumi", "Ronith", "Nipuni", "Methmi"];

// Quick for loop
for (let i = 0; i < names.length; i++) {
  console.log(`Employee ${i + 1} :- ${names[i]}`);
}

console.log('\n\n----------------------------------------\n\n');

// for...of loop
for (const name of names) {
  console.log(`Names: ${name}`);
}

console.log('\n\n----------------PROP------------------------\n\n');

// Safely get arrays from the JSON
const { employees = [] } = employeeData;

const employees1 = employeeData.employees1 ?? [];

// Print employees
for (const employee of employees) {
  console.log(`Employee ID: ${employee.id}`);
  for (const property in employee) {
    console.log(`${property}: ${employee[property]}`);
  }
  console.log('-------------------PROP-------------');
}

// Safe access to employees1[0]
if (employees1.length > 0) {
  const employee = employees1[0];
  for (const property in employee) {
    console.log(`${property}: ${employee[property]}`);
  }
} else {
  console.log('employees1 is not present or is empty in employeeData.json');
}
