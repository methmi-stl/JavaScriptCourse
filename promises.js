import fs from 'node.fs/promises';

//writing the data to the file
const data = JSON.stringify({});
fs.writeFile('./employeeData.json',data)
    .then(() =>{
        fs.writeFile("file1.json",data);
        console.log("File written successfully using promises");
    })
    .then(() =>{
        fs.writeFile("file2.json",data);
        console.log("Another then block after file write");
    })
    .then(() =>{
        fs.writeFile("file2.json",data);
        console.log("Yet another then block after file write");
    })
    .catch((error) =>{
        console.error("Error writing file:", error);
    });

await fs.writeFile("file3.json",data);
console.log("File written successfully using await");
await fs.writeFile("file4.json",data);
console.log("Another file written successfully using await");

//execute async function immediately
writeFile().then(() => console.log("File written using async function"));