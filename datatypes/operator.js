console.log(typeof "tpointech");  
console.log(typeof 50);  
console.log(typeof false);  
console.log(typeof {});  
console.log(typeof undefined);  

const n = [1, 2, 23, 4];  
console.log(n instanceof Array);  
console.log(n instanceof Object);  
console.log(n instanceof Number);  
console.log(n instanceof String);  

let a, b;  
const result = (a = 10, b = 2, a + b);  
console.log(result);  

//Chaining Operation

const obj = {name:"Rohit", address:{city:"Noida"}};
console.log(obj?.address?.city)