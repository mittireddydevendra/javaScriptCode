// Chaining Operator

const obj = {name:"Rohit", address:{city:"Noida"}};
console.log(obj.address?.city);
console.log(obj.contact?.phone);

//Typeof Operator

console.log(typeof "Dev");
console.log(typeof 50);
console.log(typeof false);
console.log(typeof {});
console.log(typeof undefined);

//include
let fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("orange")); // false

//find
const arr =[101,102,103,104,105,106,111];
const isPresent = arr.find(x=> x == 101);
console.log(isPresent);

//filter
const isfilter = arr.filter(x=>x== 101);
console.log(isfilter)