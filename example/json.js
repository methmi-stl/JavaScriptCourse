//Javascript Object

let employee = {
    firstName: "Methmi",
    lastName: "Dharmakeerthi",
    birthdate: new Date("January 1, 1982"),
    numYearsEmployment: 7,
    department: "Engineering",
    title:"ASE",
    isActive: true,
    salary: 162000
};

//convert to JSON string
let jsonValue = JSON.stringify(employee);
console.log(jsonValue);
console.log(typeof(jsonValue));

jsonValue = JSON.stringify(employee, null,2);
console.log(jsonValue);

//Convert Value Back to Object
let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee);
console.log(typeof(newEmployee));

//  direct json
let jsonString = `{
    "firstName": "Ronithi",
    "lastName": "Arunoda"
    }`;

let obj = JSON.parse(jsonString);
console.log(obj);
console.log(typeof(obj));

//improperly formatted json
let notJSON = "hello";