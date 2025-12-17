import fs from "node:fs/promises";

async function loadData(){
    try{
        const data = await fs.readFile(`./employeeData.json`,'utf8');
        const dataObj = JSON.parse(data);
        console.log(`dataObj :-  `, dataObj);
        console.log("\n --------Completed reading data using async-await --------\n");
        }catch(err){
            console.log("\n------An error occurred while reading file:-----\n", err.message);
            throw err;
        }
}
loadData().then(() => console.log("------COMPLETED PROMISE Data loaded using async-await-----"));
