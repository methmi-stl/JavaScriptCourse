// Array of complex objects

import data from './employeeData.json' with { type: 'json' };

//// Get the 'employees' array from the imported JSON data.
// If 'employees' does NOT exist or is null/undefined,
// use an empty array [] instead to prevent runtime errors

const employees = data.employees ?? [];

// listing only the first five items
for (let i = 0; i < employees.length && i < 5; i++) {
  console.log(`Name : ${employees[i].FIRST_NAME} ${employees[i].LAST_NAME}`);
}

//Searching only for the firstnames that starts with `B`

for(let employee of employees){
    if(!employee.FIRST_NAME.startsWith('A')){
        continue;
    }
    console.log(`Name: ${employee.FIRST_NAME} ${employee.LAST_NAME}`);   
}

//nested loop control flow

for(let emp of employees){
    for(let property in emp){
        if(property ==="HIRE_DATE"){
            continue;
        }
        console.log(`${property}: ${emp[property]}`);
    }
    console.log('------------------------------')
}

employee: for(let emp of employees){
    for(let property in emp){
        if(property ==="HIRE_DATE"){
            continue employee;
        }
        console.log(`${property}: ${emp[property]}`);
    }
    console.log('----------------------')
}