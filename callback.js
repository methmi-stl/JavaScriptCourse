// importing the node filesystem module
import fs from 'node:fs';

// Callback funtion
const fileWriteCoompleted = () => {
  console.log('File written successfully using callback function');
};

// writing the data to the file
const data = JSON.stringify({});
fs.writeFile('./employeeData.json', data, fileWriteCoompleted);
