//creating arrays

let arr1 =[];
let arr2 =["Item1","Item2"];
let arr3 = new Array();
let arr4 = new Array("Item1","Item2","Item3");

//accessing values from an array
let names = ["Kabeer","Piumi","Ronith","Nipuni","Methmi","Divya","Ajeema"];
console.log(names);

console.log(`Lenght of Array Names:- ${names.length}`);
console.log(`Name Array First Item:- ${names[0]}`);
console.log(`Name Array Second Item :- ${names[1]}`);
console.log(`Name Array Last Item :- ${names[names.length-1]}`);
console.log(`Name Array 10th Item :- ${names[9]}`);

//searching for values
const includesDavid = names.includes("David");
console.log(`Is David included in Names Array? :- ${includesDavid}`);

const davidIndex= names.indexOf("David");
console.log(`Index of David in Names Array? :- ${davidIndex}`);

const includesPiumi = names.includes("Piumi");
console.log(`\nIs Piumi included in Names Array? :- ${includesPiumi}`);

const piumiIndex = names.indexOf("Piumi");
console.log(`Index of Pium in Names Array ? :- ${piumiIndex}`);


//Adding values - at the end 
names.push("Shannon");
console.log(names);

//Adding values - at the beginning
names.unshift("Sarah");
