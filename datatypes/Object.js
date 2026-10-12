// object is a collection of data and functionality stored as functions.
// Values are stored as key:value pairs called properties.

//object

const car ={
    type: "fiat",
    model: "500",
    color:"white"
};
console.log(car)

// empty object

const person ={};
console.log(person)

//create new object

const person1 = new Object({
    fName: "John",
    lName: "Doe",
    age: 50,
    eyeColor: "blue"
});
console.log(person1)
console.log(person1.age)

//object method
const p1 = {
    fname : "john",
    lname : "Doe",
    age   :  50,
    fullname : function(){
        return this.fname + " " + this.lname;
    }
};
console.log(p1);
console.log(p1.fullname());

// object.entries()
const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}
console.log(fruits)

// object.values()

// Create an Object
const person2 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
const myArray = Object.values(person);

// Stringify the Array
let text1 = myArray.toString();
console.log(myArray)
console.log(text1)