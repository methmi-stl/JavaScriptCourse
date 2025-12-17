import fs from 'node:fs/promises';
//import node filesystem module (the callback version)

import fsc from "node:fs";

fs.readFile(`./employeeData.json`,'utf8')
    .then(data =>{
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log(dataObj);
        console.log("\nCompleted reading employee data using promises\n");
    })
    .then(() => readFile("data.json"))
    .then(data => console.log(data))
    .catch(err =>{
        console.log("\n------An error occurred while reading file:-----\n", err.message);
        throw err;
    })
//Creating a custom Promise with callback API
const readFile = async (filename) =>{
    return new Promise ((resolve, reject) => {
        fsc.readFile('data.json','utf8',(err,data) =>{
            if(err){
                rejects(err);
            }
        });
    });

}