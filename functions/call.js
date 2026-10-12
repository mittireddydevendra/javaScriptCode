function Emp(id, name) {
    this.id = id;
    this.name = name;
}

function PermanentEmp(id, name) {
    Emp.call(this, id, name);
}

let emp1 = new PermanentEmp(101, "John Martin");

console.log(emp1.name);
console.log(emp1.id);
