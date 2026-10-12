
//function Declaration: A normal named function.

function greet(){
    console.log("Hello");
}
greet();

//function Expression: A function is stored inside a variable.

const greet1 = function () {
    console.log("Hello_1");
};
greet1();

// Arrow Function: A shorter way to write a function.

const greet2 = () =>{
    console.log("Hello_2")
}
greet2();

const add =(a,b)=>{
    return a + b;
};
console.log(add(10,20));

//Anonymous function: A function without a name.

setTimeout(function(){
    console.log("Hello_3")
},1000);

//IIFE (immediately Invoked Function Expression): 
// A function that executes immediately after it is created.

(function (){
    console.log("Hello World")
}) ();

// Parameterized function: A function that receives parameters.

function greet12(name){
    console.log("Hello " + name);
}
greet12("Dev");

//Function with Return Value: A function that returns a value
// function add(a, b) {
//     return a + b;
// }

// let result = add(10, 20);
// console.log(result);

// callback function: A function passed as an argument to another function.

function greet13(name, callback) {
    console.log("Hello " + name);
    callback();
}
function message() {
    console.log("Welcome!");
}
greet13("Devendra", message);

//HOC:
function calculate1(a, b, operation) {
    return operation(a, b);
}

const add1 = (x, y) => x + y;

console.log(calculate1(20, 20, add));

/*
1. function Declaration: 
  Ex:
   function name(){
     console.log("hi")
   }
   name();

2. function Expression:
  Ex:
   const A1 = function(){
    console.log("hi")
    }

3.Arrow function:

 Ex:
  const A2=()=>{
    console.log("hi g")
    
    }
   A2();

4.Anonymous function:
  Ex:
  setTimeout(function(){
   console.log("hi")
  },1000)

5. callback function:
   Ex:
    function add(a,b){
     return a + b;
    } 

    function calculate(num,callback){
      console.log(num, callback(12,13))
    } 
    calculate(12,add);
    
6.IIFE
  Ex:
  (function(){
  consloe.log("hi")
  })();  
  
7. HOC:
   Ex:
   A function that takes another function as an argument or returns a function.
   
   function calculate(a,b,operator){
    return operator(a,b);
   }
   const add =(x,y)=>x + y;
   console.log(calculate(10,20,add));
*/