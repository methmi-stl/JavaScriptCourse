//creating dates

let date1 = new Date("2023-12-01");
console.log(date1);
let date2 = new Date("January 1, 2023");
console.log(date2)

console.log(new Date());

let date3 = new Date();
console.log(date3);

console.log(`Day of date1   :- ${date1.getDay}`);
console.log(`Date of date1  :-  ${date1.getDate}`);
console.log(`Month os date1 :- ${date1.getMonth}`);

//Display a locale-specific date string
console.log(`Locale en-US ${date1.toLocaleDateString('en-US')}`);
console.log(`Locale en-GB ${date1.toLocaleDateString('en-GB')}`);
console.log(`Locale si-LK ${date1.toLocaleDateString('si-LK')}`);
console.log(`Locale ja-JP ${date1.toLocaleDateString('ja-JP')}`);

//Display a locale-specific time string
console.log(`Locale en-US Time: ${date1.toLocaleTimeString('en-US')}`);
console.log(`Locale en-GB Time: ${date1.toLocaleTimeString('en-GB')}`);
console.log(`Locale si-LK Time: ${date1.toLocaleTimeString('si-LK')}`);
console.log(`Locale ja-JP Time: ${date1.toLocaleTimeString('ja-JP')}`);

//Custom date and time format
let options ={
    dateStyle: 'full',
    timeStyle: 'long'

};
console.log(`Custom en-US : ${date1.toLocaleString('en-US', options)}`);

let options2 ={
    dateStyle: 'medium',
    timeStyle: 'short'
}
console.log(`Custom si-LK : ${date1.toLocaleString('si-LK', options2)}`);

let options3 ={
    dateStyle: 'short',
    timeStyle: 'medium'
}
console.log(`Custom ja-JP : ${date1.toLocaleString('ja-JP', options3)}`);
console.log(`Custom ar-KW : ${date1.toLocaleString('ar-KW', options3)}`);
