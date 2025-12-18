// substraction

const val1 = 10 - 4;
console.log(`Substraction Value:- ${val1}`);

const val2 = '10' - '3';
console.log(`String Substraction Value:- ${val2}`);

const val3 = 'Hello ' - 'World';
console.log(`String Substraction Value:- ${val3}`);

const val4 = '15' - 5;
console.log(`String and Number Substraction Value:- ${val4}`);

const val5 = 5 - true; // true is treated as 1
console.log(`Number and Boolean Substraction Value:- ${val5}`);

const val6 = 5 - false; // false is treated as 0
console.log(`Number and Boolean Substraction Value:- ${val6}`);

const val7 = '20' - false; // false is treated as 0
console.log(`String and Boolean Substraction Value:- ${val7}`);

const val8 = 7 - -18;
console.log(`Substraction Value:- ${val8}`);
