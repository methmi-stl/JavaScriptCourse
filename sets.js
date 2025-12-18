// creating a set
const set1 = new Set();
set1.add('Apple');
set1.add('Banana');
set1.add('Orange');
set1.add('Grapes');
console.log(set1);
console.log(`Set Size is :- ${set1.size}`);

set1.add('Apple'); // duplicate values
console.log(`Set  adding duplicate value :- ${(set1.add('Apple'))}`);
console.log(`After adding duplicate value Set Size is :- ${set1.size}`);

// Deleting values
set1.delete('Banana');
console.log(`After Deleting Banana Set Size is :- ${set1.size}`);

// Adding in complex values
const team1 = new Set();
const emp1 = {
  firstName: 'Methmi',
  lastName: 'Dharmakeerthi',
};

team1.add(emp1);
console.log(team1);
console.log(`Team 1 Size :- ${team1.size}`);
const emp2 = {
  firstName: 'Bathiya',
  lastName: 'Abeyrathne',
};
team1.add(emp2);
const emp3 = {
  firstName: 'Gayathma',
  lastName: 'Hiruni',
};
team1.add(emp3);

console.log(`Team 1 :- ${team1}`);
console.log(`Team 1 Size :- ${team1.size}`);

// checking values
console.log(`Is emp1 present? :- ${team1.has(emp1)}`);

// deleting if a set has an object
team1.delete(emp3);
console.log(`After Deleting emp3, Team 1 Size :- ${team1.size}`);
