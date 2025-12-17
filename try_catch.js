import fs from 'node.fs/promises';
//Reading a file and parsing it as JSON
try {
    const rawData = await fs.readFile("./employeeData.json");
    const dataObj = JSON.parse(rawData);

    //Accessing a property that may not exist
    console.log("Employee Name: ", dataObj.employees[0].FIRST_NAME);
    //Attempting to access a property of undefined
    console.log("Employee Age: ", dataObj.employees1[0].AGE);
} catch (error) {
    console.error("An error occurred while accessing employee data:", error.message);
}   


///
fs.readFile("./employeeData.json")
    .then((rawData) => {
        const dataObj = JSON.parse(rawData);
        console.log("Employee Name: ", dataObj.employees[0].FIRST_NAME);
        console.log("Employee Age: ", dataObj.employees1[0].AGE);
        return JSON.parse(rawData)
    })
    .catch((error) => {
        console.error("An error occurred while accessing employee data:", error.message);
        console.log("Error Name :- ", error.name); 
        console.log("Error Message :- ", error.message);
        console.log("Error Stack :- ", error.stack);
    });