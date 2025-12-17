//Function expression
let isDavidFunction = function(name) {
    return name === "David";
};


//multiline arrow function
let isDavidArrowMulti = (name) => {
    return name === "David";
};


//Single line arrow function with a parameter
const isDavidArrowSingle = name => name === "David";

//single line arrow function with no parameter
const lineBreak = () => console.log(" ");

//Arrow function with multiple parameters
const logArray = (item, index) => {
    console.log(`${index}: ${item}`);
}