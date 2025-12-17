import fs from 'node:fs';

fs.readFile("./x.json", 'utf8', (err, data) => {
    if (err) {
        console.error("\n------An error occurred while reading file:-----\n", err.message);
        throw err;
    }
    try{
    const dataObj = JSON.parse(data);
    console.log(dataObj);
    console.log("\nCompleted reading employee data using callbacks\n");

    }
    catch(err){
        console.error("\nAn error occurred while parsing JSON data:\n", parseError.message);
        throw err;
    }
    
});   