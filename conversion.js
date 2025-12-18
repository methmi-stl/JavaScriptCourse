const strValue = 'Hi';
console.log(`Type of "Hi" is :- ${typeof (strValue)}`);
const numValue = 1;
console.log(`Type of 1 is :- ${typeof (numValue)}`);
const boolValue = true;
console.log(`Type of true is :- ${typeof (boolValue)}`);

// Joining a non string value with a string
const sAge = 25;
const firstName = 'Methmi';
const lastName = 'Dharmakeerthi';
const description = `${firstName} is ${sAge} years old.`;
const blabla = `Hello ${firstName}${lastName}, you are ${sAge} years old.`;

console.log(`Type of description "${description}" is :- ${typeof (description)}`);
console.log(`Type of blabla "${blabla}" is :- ${typeof (blabla)}`);

const greeting = `Hello ${firstName}, you are ${sAge} years old.`;
console.log(greeting);
console.log(typeof (greeting));

// converting string to number
const age = '25';
const ageNum = Number(age);
console.log(typeof (ageNum));

const ageNewNum = new Number(age);
console.log(typeof (ageNewNum));

// what about Nan
const ageString2 = 'forty-one';
const ageNum2 = Number(ageString2);
console.log(`Type of ageNum2 "${ageString2}" is now ${ageNum2} :- ${typeof (ageNum2)}`);

// converting a value to boolean
const isAdultString = 'true';
const isAdultBoolean = Boolean(isAdultString);
console.log(`Type of isAdultBoolean "${isAdultString}" is now ${isAdultBoolean} :- ${typeof (isAdultBoolean)}`);

const num1 = 1;
const num2 = 0;

const bool1 = Boolean(num1);
const bool2 = Boolean(num2);
console.log(`Type of bool1 converted from num1 "${num1}" is now ${bool1} :- ${typeof (bool1)}`);
console.log(`Type of bool2 converted from num2 "${num2}" is now ${bool2} :- ${typeof (bool2)}`);

const str1 = 'hello';
const bool3 = Boolean(str1);
let val1;
const bool4 = Boolean(val1);
console.log(`Type of bool3 converted from str1 "${str1}" is now ${bool3} :- ${typeof (bool3)}`);
console.log(`Type of bool4 converted from val1 "${val1}" is now ${bool4} :- ${typeof (bool4)}`);

// converting a boolean to a string (we've been doing this)
const bool5 = true;
console.log(`Type of bool5 "${bool5}" is :- ${typeof (bool5)}`);
