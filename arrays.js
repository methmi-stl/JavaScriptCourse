// creating arrays

const arr1 = [];
const arr2 = ['Item1', 'Item2'];
const arr3 = new Array();
const arr4 = new Array('Item1', 'Item2', 'Item3');

// accessing values from an array
const names = ['Kabeer', 'Piumi', 'Ronith', 'Nipuni', 'Methmi', 'Divya', 'Ajeema'];
console.log(names);

console.log(`Lenght of Array Names:- ${names.length}`);
console.log(`Name Array First Item:- ${names[0]}`);
console.log(`Name Array Second Item :- ${names[1]}`);
console.log(`Name Array Last Item :- ${names[names.length - 1]}`);
console.log(`Name Array 10th Item :- ${names[9]}`);

// searching for values
const includesDavid = names.includes('David');
console.log(`Is David included in Names Array? :- ${includesDavid}`);

const davidIndex = names.indexOf('David');
console.log(`Index of David in Names Array? :- ${davidIndex}`);

const includesPiumi = names.includes('Piumi');
console.log(`\nIs Piumi included in Names Array? :- ${includesPiumi}`);

const piumiIndex = names.indexOf('Piumi');
console.log(`Index of Pium in Names Array ? :- ${piumiIndex}`);

// Adding values - at the end
names.push('Shannon');
console.log(names);

// Adding values - at the beginning
names.unshift('Sarah');
console.log(names);

// Adding value - at a specific index - 1st index
names.splice(1, 0, 'William');
console.log(names);

names.splice(names.length - 1, 0, 'Malsha');
console.log(names);

names.splice(names.length, 0, 'Saneeka');
console.log(names);

// Removing values -at the beginning
names.shift();
console.log(names);

// Removing values - at the end
names.pop();
console.log(names);
// Removing values - at a specific index - 2nd index
names.splice(2, 1);
console.log(names);

// Removing values - at a specific index - last index
names.splice(names.length - 1, 1);
console.log(names);

// Arrays and objects
const obj1 = {
  firstName: 'Kabeer',
  lastName: 'Silva',
};
const obj2 = {
  firstName: 'Piumi',
  lastName: 'Atigala',
};

const obj3 = {
  firstName: 'Methmi',
  lastName: 'Dharmakeerthi',
};

const obj4 = {
  firstName: 'Methmi',
  lastName: 'Dharmakeerthi',
};

const employees = [obj1, obj2, obj3];
console.log(`employees: ${employees}`);

// printing object array
employees.forEach((emp, index) => {
  console.log(`Employee ${index + 1} :- ${emp.firstName} ${emp.lastName}`);
});

console.log(`\nIs identical object in array :- ${employees.includes(obj4)}`);
