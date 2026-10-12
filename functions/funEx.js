//Function Expressions
const x = function(a,b){
    return a*b
};
let z = x(4,5)
console.log(z)


//function Method - apply, bind, call, toString

function introduce(city, country) {
  console.log(this.name + " from " + city + ", " + country);
}
const person = { name: "Taylor Swift" };
introduce.apply(person, ["New York", "USA"]); 

// bind

function greet(){
    console.log("Hi" + this.name);
}
const person1 ={name:"tom"};
const greetgreetClara = greet.bind(person1);
greetClara();
