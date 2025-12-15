//example 1
let example1 = (10>4);
console.log(`Example 1 Value is :- ${example1}  * Type: ${typeof(example1)}`);

//example 2
let example2 = (5 >= 5);
console.log(`Example 2 Value is :- ${example2}  * Type: ${typeof(example2)}`);

//example 3
let example3 = (3 === '3');
console.log(`Example 3 Value is :- ${example3} * Type: ${typeof(example3)}`); 

//example 4
let example4 = (80 == 32 + 43);
console.log(`Example 4 Value is :- ${example4} * Type: ${typeof(example4)}`);

//example 5
let example5 = (7 != 7);
console.log(`Example 5 Value is :- ${example5} * Type: ${typeof(example5)}`);


let badgeColor;
let numYearsService = 12;

if(numYearsService < 5){
    badgeColor = "Blue";

}else if(numYearsService < 10){
    badgeColor = "yellow";

}else if (numYearsService < 15){
    badgeColor = "Red";
}else if (numYearsService < 20){
    badgeColor ="Purple";
}else{
    badgeColor = "Gold";
}


console.log(`Badge Color :- ${badgeColor}`);