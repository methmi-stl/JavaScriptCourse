const employee = [{
  firstName: 'Piumi',
  lastName: 'Atigala',
  startDate: new Date(2019, 5, 15),
  numYearsService: 5,
  isActive: true,
  department: 'Marketing',
  title: 'Marketing Manager',
},
{
  firstName: 'John',
  lastName: 'Doe',
  startDate: new Date(2020, 3, 10),
  numYearsService: 4,
  isActive: true,
  department: 'Engineering',
  title: 'Software Engineer',

},
{
  firstName: 'Kabeer',
  lastName: 'Smith',
  startDate: new Date(2004, 3, 10),
  numYearsService: 21,
  isActive: true,
  department: 'Marketing',
  title: 'Marketing Director',
},
{
  firstName: 'Methmi',
  lastName: 'Dharmakeerthi',
  startDate: new Date('July 1, 2024'),
  numYearsService: 1.4,
  isActive: true,
  department: 'Software',
  title: 'Associate Software Engineer',
},
];

employee.forEach((employee) => {
  switch (employee.department) {
    case 'Marketing':
      console.log(`${employee.firstName} works in Marketing Department`);
      break;
    case 'Engineering':
      console.log(`${employee.firstName} works in Engineering Department`);
      break;
    case 'Human Resources':
      console.log(`${employee.firstName} works in Human Resources Department`);
      break;
    case 'Sales':
      console.log(`${employee.firstName} works in Sales Department`);
      break;
    default:
      console.log(`${employee.firstName}'s department is not listed`);
  }
});

employee.forEach((employee) => {
  switch (employee.department) {
    case 'Marketing':
    case 'HR':
      console.log(`${employee.firstName} Meeting is scheduled at 10 AM`);
      break;

    case 'Engineering':
      console.log(`${employee.firstName} Meeting is scheduled at 11 AM`);
      break;

    default:
      console.log(`${employee.firstName} Meeting is scheduled at 9 AM`);
  }
});
