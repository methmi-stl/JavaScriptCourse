console.log("Hi");
console.log("1");
console.log("2");
console.log("3");

let firstName = "Methmi";
let lastName = 'Dharmakeerthi';

let title =`SE Engineer`;
title = `Software Developer`;

//string concatenation with the plus operator

let fulName = firstName + " " +lastName;

//String concatenation with template literals
fulName = `${firstName} ${lastName}`;
console.log(fulName);

//Mulit Lne Strings with \n
let bio = "Line 1\nLine 2\nLine 3";
console.log(bio);

//Muti - line strings with backticks

bio = `\nAbout Methmi Dharmakeerthi\n
Methmi is one of best girls in the world
She is also a Junior SE at Syneren Technology Labs.`;
console.log(`\n${bio}`)

//escaping characters

let quote = 'David said, "Javascript is Great."';
console.log(`\n${quote}\n`);

quote="David said, \"javaScript is great.\"";
console.log(`\n${quote}`);

quote = `Javascript can use 'single' and "Double" quotes`;
console.log(`\n${quote}`);






