const obj ={
    firstName: "Methmi",
    lastName: "Dharmakeerthi"
};

//creating a map
const map1 = new Map();
map1.set("firstName","Methmi");
map1.set("lastName", "Dharmakeerthi");
map1.set("age",25);

console.log(map1);

//using non-string 
const timeKey = Date.now();
map1.set(timeKey, "Number Key");
map1.set([],"Array Key");
const fnKey = () => "Hi";
map1.set(fnKey, "Function key");
map1.get(fnKey); // works 
console.log(map1);


console.log(`Map Size is :- ${map1.size}`);

//accessing values
console.log(`First Name is :- ${map1.get("firstName")}`);
console.log(`Last Name is :- ${map1.get("lastName")}`);
console.log(map1.get(timeKey));
console.log(map1.get([])); // doesn't work 
console.log(map1.get(fnKey)); // works 

//Deleting values
map1.delete("firstName");
console.log(`After Deleting First Name :- ${map1.size}`);

//Checking values
console.log(`Is age key present? :- ${map1.has("age")}`);
console.log(`Is firstName key present? :- ${map1.has("firstName")}`);

