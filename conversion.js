let strValue = "Hi";
console.log(`Type of "Hi" is :- ${typeof(strValue)}`);
let numValue =1;
console.log(`Type of 1 is :- ${typeof(numValue)}`);
let boolValue = true;
console.log(`Type of true is :- ${typeof(boolValue)}`);

//Joining a non string value with a string
let sAge = 25;
let firstName = "Methmi";
let lastName = "Dharmakeerthi";
let description = firstName + " is " + sAge + " years old.";
let blabla = "Hello " + firstName + lastName + ", you are " + sAge + " years old.";

console.log(`Type of description "${description}" is :- ${typeof(description)}`);
console.log(`Type of blabla "${blabla}" is :- ${typeof(blabla)}`);

let greeting = `Hello ${firstName}, you are ${sAge} years old.`;
console.log(greeting);
console.log(typeof(greeting));

//converting string to number
let age = "25";
let ageNum = Number(age);
console.log(typeof(ageNum));

let ageNewNum = new Number(age);
console.log(typeof(ageNewNum));

//what about Nan
let ageString2 = "forty-one";
let ageNum2 = Number(ageString2);
console.log(`Type of ageNum2 "${ageString2}" is now ${ageNum2} :- ${typeof(ageNum2)}`);

//converting a value to boolean
let isAdultString = "true";
let isAdultBoolean = Boolean(isAdultString);
console.log(`Type of isAdultBoolean "${isAdultString}" is now ${isAdultBoolean} :- ${typeof(isAdultBoolean)}`);


let num1 = 1;
let num2 =0;

let bool1 = Boolean(num1);
let bool2 = Boolean(num2)
console.log(`Type of bool1 converted from num1 "${num1}" is now ${bool1} :- ${typeof(bool1)}`);
console.log(`Type of bool2 converted from num2 "${num2}" is now ${bool2} :- ${typeof(bool2)}`);

let str1 ="hello";
let bool3 =Boolean(str1);
let val1;
let bool4=Boolean(val1)
console.log(`Type of bool3 converted from str1 "${str1}" is now ${bool3} :- ${typeof(bool3)}`);
console.log(`Type of bool4 converted from val1 "${val1}" is now ${bool4} :- ${typeof(bool4)}`);

//converting a boolean to a string (we've been doing this)
let bool5 = true;
console.log(`Type of bool5 "${bool5}" is :- ${typeof(bool5)}`);