import createPrompt from 'prompt-sync';
let prompt = createPrompt();

//get user input 
    //create empty object
let employee = {};

//validation 
let firstName = prompt("Enter Employee First Name :- ");
if(!firstName){
    console.error(`Invalid Input for First Name`);
    process.exit(1);
}
employee.firstName =firstName; 

let lastName = prompt("Enter Employee Last Name :- ");
/*if(!lastName){
    console.error(`Invalid Input for Last Name`);
    process.exit(1);
}*/
if (
  !lastName ||
  lastName.trim().length === 0 ||
  lastName.trim().length < 2 ||
  /^\d+$/.test(lastName)
) {
  console.log("Invalid Input for Last Name");
  process.exit(1);
}
employee.lastName =lastName;

let startDateYear =prompt(`Employee Start Year (1990 - 2025) :- `);
startDateYear = Number(startDateYear);

/*if(!Number.isInteger(startDateYear)){
    console.error(`Invalid Input for Start Year`);
    process.exit(1);
}*/

if(!Number.isInteger(startDateYear) || startDateYear <1990 || startDateYear >2025){
    console.error(`Invalid Input for Start Year`);
    process.exit(1);
}
 
let startDateMonth = prompt(`Employee Start Mont (1 -12) :-`);
startDateMonth = Number(startDateMonth);

if (!Number.isInteger(startDateMonth) || startDateMonth < 1 || startDateMonth > 12) {
    console.error(`Enter a start date month within the correct range`);
    process.exit(1);
}

let startDateDay = prompt(`Employee Start Day (1 -31) :- `);
startDateDay = Number(startDateDay);

if (!Number.isInteger(startDateDay) || startDateDay < 1 || startDateDay > 31) {
    console.error(`Enter a start date day within the correct range`);
    process.exit(1);
}

//Date elements are correct, let's create the date
employee.startDate = new Date(startDateYear, startDateMonth -1, startDateDay);

//check if incorrect value was entered for day of 
//activity

let isActive = prompt(`Is employee active (yes or no):- `);
if(isActive !== "yes" && isActive !== "no"){
    console.error("Enter yes or no for employee active status");
    process.exit(1);
}

employee.isActive = (isActive === "yes")

//output employee json
const json = JSON.stringify(employee,null,2);
console.log(json);

