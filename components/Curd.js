const employee = [
    {id:1,name:"Dev",salary:25000},
    {id:2,name:"Rishi",salary:30000}
];
//create-push
employee.push({
    id:3,
    name:"Ajay",
    salary:35000
});
console.log("create: ",employee)

//Read-Display all employees

console.log("Read: ",employee)

//Update-find
let emp= employee.find(employees=>employees.id===2);
if(emp){
    emp.salary =40000;
}
console.log("Update: ",employee)

// 4. DELETE - Remove employee with id 1
let employees = employee.filter(emp => emp.id !== 1);

console.log("Delete:", employees);