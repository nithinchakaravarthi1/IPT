import {test} from '@playwright/test';
// import nithin from '../emp.json';

// test.only('Check API Skill', async () => {
//     for (const employee of nithin.employees) {
//         if (employee.skillset.includes("Selenium")) {
//             console.log(`${employee.name} has selenium sill`);
//         } else {
//             console.log(`${employee.name} does not have selenium skill`);
//         }
//     }
// });

// import data from '../employeeinfo.json';
// test('Deserialization - Need employee name based on salary from Json file (playwright API testing)', async () => {
//     for(const salaryinfo of data.employees){
//         if(salaryinfo.salary.basic>=50000){
//             console.log(`${salaryinfo.firstName} ${salaryinfo.lastName} has salary below Rs.50,000 and his role is ${salaryinfo.designation}`)
//         }
//         else{
//             console.log(`${salaryinfo.firstName} has salary above Rs.50,000`)
//         }
// }
// });


test.only('Serialization - Need employee name based on salary from Json file (playwright API testing',async({page}) => {
    const employeeData = {employees:[
    {
      employeeId: "EMP001",
      firstName: "Nithin",
      lastName: "Murugavel",
      designation: "QA Engineer",
      department: "Quality Assurance",
      email: "nithin@example.com",
      phone: "9842586170",
      Salary: 82000
    
    },
    {
      employeeId: "EMP002",
      firstName: "Rahul",
      lastName: "Sharma",
      designation: "SDET",
      department: "Automation",
      email: "rahul@example.com",
      phone: "9876543210",
      Salary: 106000
    
    },
    {
      employeeId: "EMP003",
      firstName: "Priya",
      lastName: "Raman",
      designation: "Software Engineer",
      department: "Development",
      email: "priya@example.com",
      phone: "9123456789",
      Salary: 118000
    },
    {
      employeeId: "EMP004",
      firstName: "Arun",
      lastName: "Kumar",
      designation: "DevOps Engineer",
      department: "Infrastructure",
      email: "arun@example.com",
      phone: "9988776655",
      Salary: 98500
    
    },
    {
      employeeId: "EMP005",
      firstName: "Meena",
      lastName: "Joseph",
      designation: "Business Analyst",
      department: "Business",
      email: "meena@example.com",
      phone: "9012345678",
      Salary: 91500
    }
  ]}
// for(const salaryinfo of employeeData.employees){
//         if(salaryinfo.Salary>=50000){
//             console.log(`${salaryinfo.firstName} ${salaryinfo.lastName} has salary below Rs.50,000 and his role is ${salaryinfo.designation}`)
//         }
//         else{
//             console.log(`${salaryinfo.firstName} has salary above Rs.50,000`)
//         }
//     }

const requestBody = JSON.stringify(employeeData);
console.log(requestBody)
})