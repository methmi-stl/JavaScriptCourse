let employee ={
    firstName: "Methmi",
    lastName: "Dharmakeerthi",
    startDate: new Date("July 1, 2024"),
    numYearsService: 1.3,
    isActive: true,
    department: "Software Engineering",
    title: "Associate Software Engineer"

};

//Example from module
let badgeColor;

if(employee.numYearsService <5){
    employee.badgeColor = "blue";
}else if(employee.numYearsService <10){
    employee.badgeColor = "yellow";
}else if(employee.numYearsService <15){
    employee.badgeColor ="red";
}else if(employee.numYearsService <20){
    employee.badgeColor= "purple";
}else{
    employee.badgeColor = "silver";
}

console.log(`Years: ${employee.numYearsService} Badge Color :${employee.badgeColor}`);

//Evaluating multiple conditions for truthyness in all conditions
if(employee.numYearsService >5 && employee.department === "Software Engineering"){
    console.log(`Employee meets criteria`)
}else{
    console.log(`Employee does not meet criteria`);
}

//Evaluating multiple conditions for truthyness in one or more conditions
if(employee.numYearsService > 0 || employee.title.startsWith("VP")){
    console.log(`Employee meets criteria`);
}else{
    console.log(`Employee does not meet criteria`);
}

//Evaluating for a condition to NOT to be true
if(employee.numYearsService >20 && !employee.isActive){
    console.log(`Employee is retired with full retirement benefits`);
}else{
    console.log(`Employee is still active or has not reached retirement age`);
}

//using the ternary operator
if(employee.numYearsService >10){
    employee.annualBonus =1000;
}else{
    employee.annualBonus =500;
}
console.log(`Annual Bonus is : ${employee.annualBonus}`);