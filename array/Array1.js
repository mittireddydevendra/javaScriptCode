const cars =["Saab","Volvo","BMW"];
console.log(cars)

//keyword 
const cars1 = new Array("Saab","Volvo","BMW"); // create an array
console.log(cars1)

// Accessing Array Elements : index number.

const Arr =["Saab","Volvo","BMW"];
const A =Arr[0];
const Aa=Arr[1];
console.log(A)
console.log(Aa)

// Change an Array Element

Arr[0]="Opel";
console.log(Arr)

// toString(): 
// converts an array to string of (comma separated) array values.

const fruits = ["Banana", " Orange", " Apple", " Mango"];
const StrArr = fruits.toString();
console.log(StrArr)

// JSON.stringify():
const Json = JSON.stringify(fruits)
console.log(Json)

//typeof: operator in javaScript returns "object" for arrarys.

const person = {firstName:"John", lastName:"Doe", age:46};
let name = person.firstName;
console.log(name);

let len =person.firstName.length;
console.log(len);

//new Create String as Objects

let x = new String ("John");
console.log(x);

