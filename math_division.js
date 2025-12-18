// Division

const val1 = 20 / 4.5;
console.log(`Division Value:- ${val1}`);

const val2 = '20' / '5';
console.log(`String Division Value:- ${val2}`);

const val3 = 'Hello ' / 'World';
console.log(`String Division Value:- ${val3}`);

const val4 = '15' / 3;
console.log(`String and Number Division Value:- ${val4}`);

const val5 = 9 / true; // true is treated as 1
console.log(`Number and Boolean Division Value:- ${val5}`);

const val6 = 9 / false; // false is treated as 0
console.log(`Number and Boolean Division Value:- ${val6}`);

const val7 = '20' / false; // false is treated as 0
console.log(`String and Boolean Division Value:- ${val7}`);

const val8 = 45 / -9;
console.log(`Division Value:- ${val8}`);

const val9 = '*' / 5;
console.log('String and Number Division :- ${val9}');
// Remainder

const val10 = 9 % 2;
console.log(`Remaindeer Value :- ${val10}`);

const val11 = 10 / 3;
const val12 = 10 % 3;
console.log(`10 divided by 3 is ${val11} and the Remainder is ${val12}`);

// Exponentiation
const val13 = 3 ** 4;
console.log(`Exponentiation Value :- ${val13}`);

let val14 = 5;
val14++;
console.log(`Increment Value :- ${val14}`);

val14--;
console.log(`Decrement Value :- ${val14}`);
