// Addition
const val1 = 3 + 2;
console.log(`Addition Value:- ${val1}`);

const val2 = '3' + '2';
console.log(`String Addition Value:- ${val2}`);

const val3 = 'Hello ' + 'World';
console.log(`String Addition Value:- ${val3}`);

const val4 = `5${10}`;
console.log(`String and Number Addition Value:- ${val4}`);

const val5 = 5 + true; // true is treated as 1
console.log(`Number and Boolean Addition Value:- ${val5}`);

const val6 = 5 + false; // false is treated as 0
console.log(`Number and Boolean Addition Value:- ${val6}`);

const val7 = `5${false}`; // false is treated as "false"
console.log(`String and Boolean Addition Value:- ${val7}`);

const val8 = 7 + -18;
console.log(`addition Value:- ${val8}`);
