let employee = {
    firstName: "Piumi",
    lastName: "Atigala",
    startDate: new Date(2019, 5, 15),
    numYearsService:5,
    isActive:true,
    department: "Marketing",
    title: "Marketing Manager"
};

switch(employee.department){
    case "Marketing":
        console.log(`${employee.firstName} works in Marketing Department`);
        break;
    case "Engineering":
        console.log(`${employee.firstName} works in Engineering Department`);
        break;
    case "Human Resources":
        console.log(`${employee.firstName} works in Human Resources Department`);
        break;
    case "Sales":
        console.log(`${employee.firstName} works in Sales Department`);
        break;
    default:
        console.log(`${employee.firstName}'s department is not listed`);s


}

switch(employee.department){
    case "Marketing":
    case "HR":
        console.log(`Meeting is scheduled at 10 AM`);
        break;
    
    case "Engineering":
        console.log(`Meeting is scheduled at 11 AM`);
        break;
    
        default:
        console.log(`Meeting is scheduled at 9 AM`);
}